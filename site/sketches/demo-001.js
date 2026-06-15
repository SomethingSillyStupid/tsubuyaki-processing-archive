// Demo placeholder sketch for Phase 1; not copied from X.
let pts=[];
function setup(){
  createCanvas(720,720); pixelDensity(1); colorMode(HSB,360,100,100,100);
  for(let i=0;i<180;i++) pts.push({a:random(TAU),r:random(40,310),s:random(.003,.015),h:random(190,330)});
  background(228,35,6);
}
function draw(){
  noStroke(); fill(228,35,6,9); rect(0,0,width,height);
  translate(width/2,height/2);
  blendMode(ADD);
  for(const p of pts){
    p.a += p.s * (1 + sin(frameCount*.01+p.r)*.8);
    let wob = 22*sin(frameCount*.013+p.r*.04);
    let x = cos(p.a)* (p.r+wob), y = sin(p.a*1.7)* (p.r*.52+wob*.3);
    fill(p.h,58,92,22); circle(x,y,2.2+6*(1-p.r/330));
    stroke(p.h,45,90,20); strokeWeight(.8); line(x,y,x*.985,y*.985);
  }
  blendMode(BLEND);
}
