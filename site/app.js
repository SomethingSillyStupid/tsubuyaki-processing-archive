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

function runnerSrcDoc(code){
  const escaped = code.replace(/<\/script/gi,'<\\/script');
  return `<!doctype html><html><head><meta charset="utf-8"><script>p5={};p5.disableFriendlyErrors=true;<\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js"><\/script><style>html,body{margin:0;height:100%;overflow:hidden;background:#07080b}canvas{display:block;width:100%!important;height:100%!important;object-fit:contain;margin:auto}</style></head><body><script>${escaped}<\/script></body></html>`;
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
  return `<iframe loading="lazy" sandbox="allow-scripts" srcdoc="${esc(runnerSrcDoc(code))}"></iframe>`;
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
  const runtime = sketch.runtime_status;
  if (runtime === 'runs') return 'runs';
  if (runtime === 'runs-with-warnings') return 'warnings';
  if (runtime === 'runtime-error') return 'review';
  return sketch.status || 'unverified';
}

function tsubuyakiBadge(sketch){
  const info = sketch.tsubuyaki || {};
  const chars = info.code_chars;
  const ok = info.single_tweet_full_code !== false && info.code_under_280 !== false;
  return ok ? `≤280 chars${Number.isFinite(chars) ? ` · ${chars}` : ''}` : 'over 280';
}

function searchableText(sketch, code){
  return `${sketch.author.username} ${sketch.author.name || ''} ${sketch.summary || ''} ${statusBadge(sketch)} ${tsubuyakiBadge(sketch)} ${code}`.toLowerCase();
}

function cardTemplate(sketch, code){
  const detailUrl = `sketch.html?id=${encodeURIComponent(sketch.id)}`;
  return `<a class="card" href="${detailUrl}" data-user="${esc(sketch.author.username)}" data-date="${esc(sketch.created_at)}" data-title="${esc(searchableText(sketch, code))}">
    <div class="thumb">${mediaTemplate(sketch, code)}<span class="badge">${esc(statusBadge(sketch))}</span></div>
    <div class="card-body"><h2>${esc(displayName(sketch))}</h2><div class="meta"><span>${fmtDate(sketch.created_at)}</span><span>•</span><span>${esc(sketch.author.name || sketch.author.username)}</span></div><div class="mini-badges"><span>${esc(tsubuyakiBadge(sketch))}</span><span>${esc(statusBadge(sketch))}</span></div><p class="summary">${esc(sketch.summary || 'Verified single-tweet p5.js sketch from #つぶやきProcessing.')}</p></div>
  </a>`;
}

function syncUrl({artist, sort, search, status}){
  const params = new URLSearchParams(location.search);
  artist ? params.set('artist', artist) : params.delete('artist');
  status ? params.set('status', status) : params.delete('status');
  sort && sort !== 'newest' ? params.set('sort', sort) : params.delete('sort');
  search ? params.set('q', search) : params.delete('q');
  const next = `${location.pathname}${params.toString() ? `?${params}` : ''}`;
  history.replaceState(null, '', next);
}

async function initIndex(){
  const sketches = await getSketches();
  const withCode = await Promise.all(sketches.map(async s => [s, await getCode(s.code_file)]));
  const grid = $('#grid'); const search = $('#search'); const artist = $('#artist'); const sort = $('#sort'); const status = $('#status'); const loadMore = $('#loadMore'); const resultCount = $('#resultCount');
  const params = new URLSearchParams(location.search);
  let visibleLimit = PAGE_SIZE;
  $('#count').textContent = `${sketches.length} sketches`;
  $('#artistCount').textContent = `${new Set(sketches.map(s=>s.author.username)).size} artists`;
  for(const u of [...new Set(sketches.map(s=>s.author.username))].sort()) artist.insertAdjacentHTML('beforeend',`<option value="${esc(u)}">@${esc(u)}</option>`);
  artist.value = params.get('artist') || '';
  sort.value = params.get('sort') || 'newest';
  search.value = params.get('q') || '';
  status.value = params.get('status') || '';

  function filteredRows(){
    let rows = [...withCode];
    const q = search.value.trim().toLowerCase();
    const a = artist.value;
    const st = status.value;
    if(q) rows = rows.filter(([s,c]) => searchableText(s,c).includes(q));
    if(a) rows = rows.filter(([s]) => s.author.username === a);
    if(st) rows = rows.filter(([s]) => statusBadge(s) === st || s.runtime_status === st);
    rows.sort((A,B) => sort.value === 'oldest' ? new Date(A[0].created_at)-new Date(B[0].created_at) : new Date(B[0].created_at)-new Date(A[0].created_at));
    return rows;
  }

  function render(){
    const rows = filteredRows();
    const shown = rows.slice(0, visibleLimit);
    syncUrl({artist:artist.value, sort:sort.value, search:search.value.trim().toLowerCase(), status:status.value});
    resultCount.textContent = `${rows.length} matching sketch${rows.length === 1 ? '' : 'es'}`;
    grid.innerHTML = shown.length ? shown.map(([s,c])=>cardTemplate(s,c)).join('') : '<div class="empty">No sketches match that filter.</div>';
    loadMore.hidden = shown.length >= rows.length;
    loadMore.textContent = `Show ${Math.min(PAGE_SIZE, rows.length - shown.length)} more`;
    activateHoverPreviews(grid);
  }

  [search,artist,sort,status].forEach(el=>el.addEventListener('input',() => { visibleLimit = PAGE_SIZE; render(); }));
  loadMore.addEventListener('click', () => { visibleLimit += PAGE_SIZE; render(); });
  render();
}

async function initDetail(){
  const id = new URLSearchParams(location.search).get('id');
  const sketches = await getSketches();
  const sketch = sketches.find(s => s.id === id) || sketches[0];
  const code = await getCode(sketch.code_file);
  document.title = `${displayLabel(sketch)} — #つぶやきProcessing Archive`;
  $('#title').textContent = displayName(sketch);
  $('#artist').textContent = fmtDateTime(sketch.created_at);
  $('#date').textContent = sketch.author.name || sketch.author.username;
  $('#summary').textContent = sketch.summary || 'Verified single-tweet p5.js sketch from #つぶやきProcessing.';
  $('#tsubuyakiMeta').textContent = `${tsubuyakiBadge(sketch)} · full code in one standard tweet`;
  $('#runtimeMeta').textContent = `${statusBadge(sketch)}${sketch.last_verified_at ? ` · verified ${fmtDate(sketch.last_verified_at)}` : ''}`;
  $('#tweet').href = sketch.tweet_url;
  $('#profile').href = sketch.author.url;
  $('#artistArchive').href = `index.html?artist=${encodeURIComponent(sketch.author.username)}`;
  $('#raw').href = sketch.code_file;
  $('#runner').srcdoc = runnerSrcDoc(code);
  const preview = previewImage(sketch, 'hover-preview detail-preview');
  if (preview) {
    $('#previewSlot').innerHTML = preview;
    activateHoverPreviews($('#previewSlot'));
  } else {
    $('#previewCard').style.display = 'none';
  }
  $('#code').textContent = code;
  $('#copy').addEventListener('click', async () => { await navigator.clipboard.writeText(code); $('#copy').textContent = 'Copied'; setTimeout(()=>$('#copy').textContent='Copy code',1200); });
  $('#reset').addEventListener('click', () => { $('#runner').srcdoc = runnerSrcDoc(code); });
}

if(document.body.dataset.page === 'index') initIndex().catch(err => { console.error(err); $('#grid').innerHTML = `<div class="empty">${esc(err.message)}</div>`; });
if(document.body.dataset.page === 'detail') initDetail().catch(err => { console.error(err); document.body.insertAdjacentHTML('beforeend', `<div class="empty">${esc(err.message)}</div>`); });
