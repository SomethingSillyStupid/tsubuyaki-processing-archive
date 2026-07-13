import { runnerSrcDoc } from './runner.js';

const DATA_URL = 'data/sketches.json';
const PAGE_SIZE = 24;
const $ = (sel, el=document) => el.querySelector(sel);
const fmtDate = (iso) => new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'numeric'}).format(new Date(iso));
const fmtDateTime = (iso) => new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'numeric',hour:'numeric',minute:'2-digit'}).format(new Date(iso));
const esc = (value='') => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const displayName = (sketch) => `@${sketch.author.username}`;
const displayLabel = (sketch) => `${displayName(sketch)} · ${fmtDate(sketch.created_at)}`;

async function getSketches(){
  const res = await fetch(DATA_URL, {cache:'no-store'});
  if(!res.ok) throw new Error(`Could not load ${DATA_URL}`);
  return res.json();
}

async function getCode(file){
  const res = await fetch(file, {cache:'no-store'});
  if(!res.ok) throw new Error(`Could not load ${file}`);
  return res.text();
}

function previewImage(sketch, className='hover-preview'){
  const still = sketch.preview_still_file || sketch.preview_file;
  const motion = sketch.preview_motion_file || sketch.preview_file;
  if (!still) return '';
  return `<img class="${className}" src="${esc(still)}" data-motion="${esc(motion)}" alt="Preview of ${esc(displayLabel(sketch))}" loading="lazy" decoding="async">`;
}

function mediaTemplate(sketch, code){
  const preview = previewImage(sketch);
  if (preview) return preview;
  return `<iframe loading="lazy" sandbox="allow-scripts" srcdoc="${esc(runnerSrcDoc({code, language:sketch.language}))}"></iframe>`;
}

function activateHoverPreviews(root=document){
  root.querySelectorAll('.hover-preview[data-motion]').forEach((stillImg) => {
    if (stillImg.dataset.hoverBound === '1') return;
    stillImg.dataset.hoverBound = '1';
    const motion = stillImg.dataset.motion;
    if (!motion || motion === stillImg.getAttribute('src')) return;
    const host = stillImg.closest('.card, .preview-media') || stillImg.parentElement || stillImg;
    let motionImg = null;
    const showMotion = () => {
      if (motionImg) return;
      motionImg = document.createElement('img');
      motionImg.className = 'motion-preview';
      motionImg.alt = '';
      motionImg.decoding = 'async';
      motionImg.src = motion;
      host.classList.add('is-playing');
      stillImg.insertAdjacentElement('afterend', motionImg);
    };
    const showStill = () => {
      host.classList.remove('is-playing');
      if (motionImg) { motionImg.remove(); motionImg = null; }
    };
    host.addEventListener('pointerenter', showMotion);
    host.addEventListener('pointerleave', showStill);
    host.addEventListener('focusin', showMotion);
    host.addEventListener('focusout', showStill);
  });
}

function statusBadge(sketch){
  const runtime = sketch.runtime?.status || sketch.runtime_status;
  if (runtime === 'runs') return 'verified';
  if (runtime === 'runs-with-warnings') return 'verified with warnings';
  if (runtime === 'runtime-error') return 'review';
  return sketch.status || 'unverified';
}

function tsubuyakiBadge(sketch){
  const info = sketch.tsubuyaki || {};
  const chars = info.code_chars;
  const ok = info.single_tweet_full_code !== false && info.code_under_280 !== false;
  return ok ? `≤280 chars${Number.isFinite(chars) ? ` · ${chars}` : ''}` : 'over 280';
}

function languageLabel(sketch){ return sketch.language === 'processing' ? 'Processing' : 'p5.js'; }

function searchableText(sketch, code){
  return `${languageLabel(sketch)} ${sketch.author.username} ${sketch.author.name || ''} ${sketch.summary || ''} ${statusBadge(sketch)} ${tsubuyakiBadge(sketch)} ${code}`.toLowerCase();
}

function cardTemplate(sketch, code){
  const detailUrl = `sketch.html?id=${encodeURIComponent(sketch.id)}`;
  return `<a class="card" href="${detailUrl}" data-user="${esc(sketch.author.username)}" data-date="${esc(sketch.created_at)}" data-title="${esc(searchableText(sketch, code))}">
    <div class="thumb">${mediaTemplate(sketch, code)}<span class="badge">${esc(statusBadge(sketch))}</span></div>
    <div class="card-body"><h2>${esc(displayName(sketch))}</h2><div class="meta"><span>${fmtDate(sketch.created_at)}</span><span>•</span><span>${esc(sketch.author.name || sketch.author.username)}</span></div><div class="mini-badges"><span>${esc(languageLabel(sketch))}</span><span>${esc(tsubuyakiBadge(sketch))}</span><span>${esc(statusBadge(sketch))}</span></div><p class="summary">${esc(sketch.summary || `Verified single-tweet ${languageLabel(sketch)} sketch from #つぶやきProcessing.`)}</p></div>
  </a>`;
}

function syncUrl({artist, language, sort, search, status}){
  const params = new URLSearchParams(location.search);
  artist ? params.set('artist', artist) : params.delete('artist');
  status ? params.set('status', status) : params.delete('status');
  language ? params.set('language', language) : params.delete('language');
  sort && sort !== 'newest' ? params.set('sort', sort) : params.delete('sort');
  search ? params.set('q', search) : params.delete('q');
  const next = `${location.pathname}${params.toString() ? `?${params}` : ''}`;
  history.replaceState(null, '', next);
}

async function initIndex(){
  const sketches = await getSketches();
  const withCode = await Promise.all(sketches.map(async s => [s, await getCode(s.code_file)]));
  const grid = $('#grid'); const search = $('#search'); const artist = $('#artist'); const language = $('#language'); const sort = $('#sort'); const status = $('#status'); const loadMore = $('#loadMore'); const resultCount = $('#resultCount');
  const params = new URLSearchParams(location.search);
  let visibleLimit = PAGE_SIZE;
  $('#count').textContent = `${sketches.length} sketches`;
  $('#artistCount').textContent = `${new Set(sketches.map(s=>s.author.username)).size} artists`;
  for(const u of [...new Set(sketches.map(s=>s.author.username))].sort()) artist.insertAdjacentHTML('beforeend',`<option value="${esc(u)}">@${esc(u)}</option>`);
  artist.value = params.get('artist') || '';
  sort.value = params.get('sort') || 'newest';
  search.value = params.get('q') || '';
  status.value = params.get('status') || '';
  language.value = params.get('language') || '';

  function filteredRows(){
    let rows = [...withCode];
    const q = search.value.trim().toLowerCase();
    const a = artist.value;
    const st = status.value;
    if(q) rows = rows.filter(([s,c]) => searchableText(s,c).includes(q));
    if(a) rows = rows.filter(([s]) => s.author.username === a);
    if(st) rows = rows.filter(([s]) => statusBadge(s) === st || s.runtime?.status === st || s.runtime_status === st);
    if(language.value) rows = rows.filter(([s]) => s.language === language.value);
    rows.sort((A,B) => sort.value === 'oldest' ? new Date(A[0].created_at)-new Date(B[0].created_at) : new Date(B[0].created_at)-new Date(A[0].created_at));
    return rows;
  }

  function render(){
    const rows = filteredRows();
    const shown = rows.slice(0, visibleLimit);
    syncUrl({artist:artist.value, language:language.value, sort:sort.value, search:search.value.trim().toLowerCase(), status:status.value});
    resultCount.textContent = `${rows.length} matching sketch${rows.length === 1 ? '' : 'es'}`;
    grid.innerHTML = shown.length ? shown.map(([s,c])=>cardTemplate(s,c)).join('') : '<div class="empty">No sketches match that filter.</div>';
    loadMore.hidden = shown.length >= rows.length;
    loadMore.textContent = `Show ${Math.min(PAGE_SIZE, rows.length - shown.length)} more`;
    activateHoverPreviews(grid);
  }

  [search,artist,language,sort,status].forEach(el=>el.addEventListener('input',() => { visibleLimit = PAGE_SIZE; render(); }));
  loadMore.addEventListener('click', () => { visibleLimit += PAGE_SIZE; render(); });
  render();
}

async function initDetail(){
  const id = new URLSearchParams(location.search).get('id');
  const sketches = await getSketches();
  const sketch = sketches.find(s => s.id === id);
  if(!sketch) throw new Error(`Sketch ${id || '(missing ID)'} not found`);
  const code = await getCode(sketch.code_file);
  document.title = `${displayLabel(sketch)} — #つぶやきProcessing Archive`;
  $('#title').textContent = displayName(sketch);
  $('#artist').textContent = fmtDateTime(sketch.created_at);
  $('#date').textContent = sketch.author.name || sketch.author.username;
  $('#summary').textContent = sketch.summary || `Verified single-tweet ${languageLabel(sketch)} sketch from #つぶやきProcessing.`;
  $('#languageMeta').textContent = languageLabel(sketch);
  $('#tsubuyakiMeta').textContent = `${tsubuyakiBadge(sketch)} · full code in one standard tweet`;
  $('#runtimeMeta').textContent = `${statusBadge(sketch)}${(sketch.runtime?.verified_at || sketch.last_verified_at) ? ` · verified ${fmtDate(sketch.runtime?.verified_at || sketch.last_verified_at)}` : ''}`;
  $('#tweet').href = sketch.tweet_url;
  $('#profile').href = sketch.author.url;
  $('#artistArchive').href = `index.html?artist=${encodeURIComponent(sketch.author.username)}`;
  $('#raw').href = sketch.code_file;
  $('#raw').textContent = sketch.language === 'processing' ? 'Original Processing source (PDE)' : 'Original p5.js source (JS)';
  const renderRunner = () => { $('#runnerError').hidden = true; $('#runner').srcdoc = runnerSrcDoc({code, language:sketch.language}); };
  renderRunner();
  addEventListener('message', event => {
    if (event.source !== $('#runner').contentWindow || !event.data || event.data.language !== sketch.language) return;
    if (event.data.type === 'tsubuyaki-error') { $('#runnerError').hidden = false; $('#runnerError').textContent = `${languageLabel(sketch)} ${event.data.phase} error: ${event.data.message}`; }
  });
  const preview = previewImage(sketch, 'hover-preview detail-preview');
  if (preview) {
    $('#previewSlot').innerHTML = preview;
    activateHoverPreviews($('#previewSlot'));
  } else {
    $('#previewCard').style.display = 'none';
  }
  $('#code').textContent = code;
  $('#copy').addEventListener('click', async () => { await navigator.clipboard.writeText(code); $('#copy').textContent = 'Copied'; setTimeout(()=>$('#copy').textContent='Copy code',1200); });
  $('#reset').addEventListener('click', renderRunner);
}

if(document.body.dataset.page === 'index') initIndex().catch(err => { console.error(err); $('#grid').innerHTML = `<div class="empty">${esc(err.message)}</div>`; });
if(document.body.dataset.page === 'detail') initDetail().catch(err => { console.error(err); document.body.insertAdjacentHTML('beforeend', `<div class="empty">${esc(err.message)}</div>`); });
