//#つぶやきProcessing #p5js
t=0,d=13
draw=_=>{
createCanvas(W=(w=200)*2,W)
g=createGraphics(W,W).textSize(W).text("Q",30,320)
C=(R,T)=>R*cos(T)+w
for(R=1;R<w;R+=d)
for(T=0;T<7;T+=20/R)
g.get(C(R,T),C(R,T-1.6))[3]?(fill(R,F=t%W,R-F),
rect(C(R,U=T+R*t%88/W),C(R,U-1.6),d)):0
t++}