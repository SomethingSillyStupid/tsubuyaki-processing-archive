//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(9)+background(4)
t||(G=random(3))
for(R=1;R<W;R+=16)
for(T=t;T<t+(Q=log(R)*33)/G;T+=2)
stroke(R<T?[R,W-T*5,U=T+Q/G].map((x,i,a)=>a[int(t/w+i+G)%3]):U=0),
point(Q*cos(U)+w,Q*sin(U)+w)
t=++t%w}