const escScript = (value) => String(value).replace(/<\/script/gi, '<\\/script');
const base = (language, body, runtime='') => `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;height:100%;overflow:hidden;background:#07080b;color:#f88}canvas{display:block;width:100%!important;height:100%!important;object-fit:contain;margin:auto}</style>${runtime}</head><body><script>
const language=${JSON.stringify(language)};
const send=(type,extra={})=>parent.postMessage({type,language,...extra},'*');
let failed=false;
const fail=(phase,error)=>{if(failed)return;failed=true;send('tsubuyaki-error',{phase,message:String(error&&error.message||error)});};
addEventListener('error',e=>fail('runtime',e.error||e.message));
addEventListener('unhandledrejection',e=>fail('runtime',e.reason));
const ready=(extra={})=>{const canvasCount=document.querySelectorAll('canvas').length;if(canvasCount&&!failed)send('tsubuyaki-ready',{canvasCount,...extra});else if(!failed)fail('runtime','Sketch did not create a canvas');};
<\/script>${body}</body></html>`;

export function runnerSrcDoc({code, language, processingRuntimeSource, p5RuntimeSource}) {
  if (language === 'p5js') {
    const runtime = p5RuntimeSource === undefined
      ? '<script>p5={};p5.disableFriendlyErrors=true;<\/script><script src="vendor/p5-1.11.3.min.js"><\/script>'
      : `<script>p5={};p5.disableFriendlyErrors=true;<\/script><script>${escScript(p5RuntimeSource)}<\/script>`;
    const body = `<script>${escScript(code)}<\/script><script>setTimeout(ready,600)<\/script>`;
    return base(language, body, runtime);
  }
  if (language === 'processing') {
    const runtime = processingRuntimeSource === undefined
      ? '<script src="vendor/processing-1.6.6.min.js"><\/script>'
      : `<script>${escScript(processingRuntimeSource)}<\/script>`;
    // Processing.compile consumes the submitted PDE directly; there is no conversion stored or displayed.
    const body = `<canvas id="processing-canvas"></canvas><script>try{Processing.disableInit();const originalSource=${JSON.stringify(code).replace(/<\/script/gi,'<\\/script')};const compiled=Processing.compile(originalSource);const instance=new Processing(document.getElementById('processing-canvas'),compiled);setTimeout(()=>{const frameCount=Number(instance.frameCount||0);if(typeof instance.draw==='function'&&frameCount<1)fail('runtime','Processing draw loop did not start');else ready({frameCount})},600)}catch(error){fail('compile',error)}<\/script>`;
    return base(language, body, runtime);
  }
  return base('ambiguous', `<div>Unsupported sketch language</div><script>fail('compile','Unsupported sketch language')<\/script>`);
}
