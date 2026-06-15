// Demo placeholder sketch for Phase 1; not copied from X.
let ps=[];
function setup(){
  createCanvas(720,720); pixelDensity(1); colorMode(HSB,360,100,100,100); background(215,36,5);
  for(let i=0;i<650;i++) ps.push({x:random(width),y:random(height),h:random(170,215)});
}
function draw(){
  noStroke(); fill(215,36,5,6); rect(0,0,width,height);
  strokeWeight(.75);
  for(const p of ps){
    let a=noise(p.x*.003,p.y*.003,frameCount*.002)*TAU*4;
    let ox=p.x, oy=p.y;
    p.x+=cos(a)*1.8; p.y+=sin(a)*1.8;
    if(p.x<0||p.x>width||p.y<0||p.y>height){p.x=random(width);p.y=random(height)}
    stroke(p.h,45,85,28); line(ox,oy,p.x,p.y);
  }
}
