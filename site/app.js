const DATA_URL = 'data/sketches.json';
const $ = (sel, el=document) => el.querySelector(sel);
const fmtDate = (iso) => new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'numeric'}).format(new Date(iso));
const esc = (value='') => String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

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
  return `<img class="${className}" src="${esc(still)}" data-motion="${esc(motion)}" alt="Preview for ${esc(sketch.title)}" loading="lazy" decoding="async">`;
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
      if (motionImg) {
        motionImg.remove();
        motionImg = null;
      }
    };

    host.addEventListener('pointerenter', showMotion);
    host.addEventListener('pointerleave', showStill);
    host.addEventListener('focusin', showMotion);
    host.addEventListener('focusout', showStill);
  });
}

function cardTemplate(sketch, code){
  return `<a class="card" href="sketch.html?id=${encodeURIComponent(sketch.id)}" data-user="${esc(sketch.author.username)}" data-date="${esc(sketch.created_at)}" data-title="${esc(`${sketch.title.toLowerCase()} ${sketch.author.username.toLowerCase()}`)}">
    <div class="thumb">${mediaTemplate(sketch, code)}<span class="badge">${esc(sketch.status)}</span></div>
    <div class="card-body"><h2>${esc(sketch.title)}</h2><div class="meta"><span>@${esc(sketch.author.username)}</span><span>•</span><span>${fmtDate(sketch.created_at)}</span></div><p class="summary">${esc(sketch.summary)}</p></div>
  </a>`;
}

async function initIndex(){
  const sketches = await getSketches();
  const withCode = await Promise.all(sketches.map(async s => [s, await getCode(s.code_file)]));
  const grid = $('#grid'); const search = $('#search'); const artist = $('#artist'); const sort = $('#sort');
  $('#count').textContent = `${sketches.length} sketches`;
  $('#artistCount').textContent = `${new Set(sketches.map(s=>s.author.username)).size} artists`;
  for(const u of [...new Set(sketches.map(s=>s.author.username))].sort()) artist.insertAdjacentHTML('beforeend',`<option value="${esc(u)}">@${esc(u)}</option>`);
  function render(){
    let rows = [...withCode];
    const q = search.value.trim().toLowerCase();
    const a = artist.value;
    if(q) rows = rows.filter(([s,c]) => `${s.title} ${s.author.username} ${s.summary} ${c}`.toLowerCase().includes(q));
    if(a) rows = rows.filter(([s]) => s.author.username === a);
    rows.sort((A,B) => sort.value === 'oldest' ? new Date(A[0].created_at)-new Date(B[0].created_at) : new Date(B[0].created_at)-new Date(A[0].created_at));
    grid.innerHTML = rows.length ? rows.map(([s,c])=>cardTemplate(s,c)).join('') : '<div class="empty">No sketches match that filter.</div>';
    activateHoverPreviews(grid);
  }
  [search,artist,sort].forEach(el=>el.addEventListener('input',render));
  render();
}

async function initDetail(){
  const id = new URLSearchParams(location.search).get('id');
  const sketches = await getSketches();
  const sketch = sketches.find(s => s.id === id) || sketches[0];
  const code = await getCode(sketch.code_file);
  document.title = `${sketch.title} — #つぶやきProcessing Archive`;
  $('#title').textContent = sketch.title;
  $('#artist').textContent = `@${sketch.author.username}`;
  $('#date').textContent = fmtDate(sketch.created_at);
  $('#summary').textContent = sketch.summary;
  $('#tweet').href = sketch.tweet_url;
  $('#profile').href = sketch.author.url;
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
