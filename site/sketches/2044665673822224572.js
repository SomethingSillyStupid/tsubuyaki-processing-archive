//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)+noStroke()+rectMode(CENTER)
for(R=i=0;R<w;R+=d)
for(T=0;T<TAU;T+=.3)
blendMode([DODGE,BURN][i++%2]),
fill(x=R*sin(U=T-R+(i-t)/W)+w,y=R*cos(U)+w,z=R%i*sin(t/71)),
rect(x,y,abs(z)/5)
++t}