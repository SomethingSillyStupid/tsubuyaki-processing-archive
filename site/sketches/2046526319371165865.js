//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+strokeWeight(9)+background(0)
t||(S=r(),G=int(r(3)))
for(R=1;R<W;R+=16)
for(T=t;T<t+(Q=log(R)*33)*S;T++)
stroke(R<T?[R,W-T*5,U=T+Q*S].map((x,i,a)=>a[(i+G)%3]):U=0),
point(Q*cos(U)+w,Q*sin(U)+w)
t=++t%w}