//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+blendMode(DIFFERENCE)+background(W,0,w)
fill(0,w,0)
for(T=0;T<TAU;T+=.3)
abs((U=(T+.2*cos(t/w)))%.3-.1)?quad(A=w*cos(U)+w,(B=w*sin(U))+w,C=w*cos(V=U+.1+t/w)+w,(D=w*sin(V))+w,C,w-D,A,w-B):0
++t}