
const DATA_URL = 'data/sketches.json';
const $ = (sel, el=document) => el.querySelector(sel);
const fmtDate = (iso) => new Intl.DateTimeFormat(undefined,{year:'numeric',month:'short',day:'numeric'}).format(new Date(iso));

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
  const escaped = code.replace(/<\/script/gi,'<\/script');
  return `<!doctype html><html><head><meta charset="utf-8"><script>p5={};p5.disableFriendlyErrors=true;<\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.3/p5.min.js"><\/script><style>html,body{margin:0;height:100%;overflow:hidden;background:#07080b}canvas{display:block;width:100%!important;height:100%!important;object-fit:contain;margin:auto}</style></head><body><script>${escaped}<\/script></body></html>`;
}

function mediaTemplate(sketch, code){
  if (sketch.preview_file) {
    const src = sketch.preview_file;
    const isVideo = /\.(mp4|webm)$/i.test(src);
    return isVideo ? `<video src="${src}" autoplay muted loop playsinline></video>` : `<img src="${src}" alt="Preview for ${sketch.title}" loading="lazy">`;
  }
  return `<iframe loading="lazy" sandbox="allow-scripts" srcdoc="${runnerSrcDoc(code).replaceAll('&','&amp;').replaceAll('\"','&quot;')}"></iframe>`;
}

function cardTemplate(sketch, code){
  return `<a class="card" href="sketch.html?id=${encodeURIComponent(sketch.id)}" data-user="${sketch.author.username}" data-date="${sketch.created_at}" data-title="${sketch.title.toLowerCase()} ${sketch.author.username.toLowerCase()}">
    <div class="thumb">${mediaTemplate(sketch, code)}<span class="badge">${sketch.status}</span></div>
    <div class="card-body"><h2>${sketch.title}</h2><div class="meta"><span>@${sketch.author.username}</span><span>•</span><span>${fmtDate(sketch.created_at)}</span></div><p class="summary">${sketch.summary}</p></div>
  </a>`;
}

async function initIndex(){
  const sketches = await getSketches();
  const withCode = await Promise.all(sketches.map(async s => [s, await getCode(s.code_file)]));
  const grid = $('#grid'); const search = $('#search'); const artist = $('#artist'); const sort = $('#sort');
  $('#count').textContent = `${sketches.length} sketches`;
  $('#artistCount').textContent = `${new Set(sketches.map(s=>s.author.username)).size} artists`;
  for(const u of [...new Set(sketches.map(s=>s.author.username))].sort()) artist.insertAdjacentHTML('beforeend',`<option value="${u}">@${u}</option>`);
  function render(){
    let rows = [...withCode];
    const q = search.value.trim().toLowerCase();
    const a = artist.value;
    if(q) rows = rows.filter(([s,c]) => `${s.title} ${s.author.username} ${s.summary} ${c}`.toLowerCase().includes(q));
    if(a) rows = rows.filter(([s]) => s.author.username === a);
    rows.sort((A,B) => sort.value === 'oldest' ? new Date(A[0].created_at)-new Date(B[0].created_at) : new Date(B[0].created_at)-new Date(A[0].created_at));
    grid.innerHTML = rows.length ? rows.map(([s,c])=>cardTemplate(s,c)).join('') : '<div class="empty">No sketches match that filter.</div>';
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
  if (sketch.preview_file) {
    const isVideo = /\.(mp4|webm)$/i.test(sketch.preview_file);
    $('#previewSlot').innerHTML = isVideo ? `<video src="${sketch.preview_file}" autoplay muted loop playsinline></video>` : `<img src="${sketch.preview_file}" alt="Original X preview">`;
  } else {
    $('#previewCard').style.display = 'none';
  }
  $('#code').textContent = code;
  $('#copy').addEventListener('click', async () => { await navigator.clipboard.writeText(code); $('#copy').textContent = 'Copied'; setTimeout(()=>$('#copy').textContent='Copy code',1200); });
  $('#reset').addEventListener('click', () => { $('#runner').srcdoc = runnerSrcDoc(code); });
}

if(document.body.dataset.page === 'index') initIndex().catch(err => { console.error(err); $('#grid').innerHTML = `<div class="empty">${err.message}</div>`; });
if(document.body.dataset.page === 'detail') initDetail().catch(err => { console.error(err); document.body.insertAdjacentHTML('beforeend', `<div class="empty">${err.message}</div>`); });
