//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(8)+background(0)
t||(S=random(1,9))
for(R=1;R<W;R+=4)
for(T=t;T<t+(Q=sin(R/2)*w)/S;T++)
stroke(R<T?[R,W-T*5,U=T+Q/S]:U=0),
point(Q*cos(U)+w,Q*sin(U)+w)
t=++t%W}