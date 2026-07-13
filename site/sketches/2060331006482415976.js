//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+blendMode(DIFFERENCE)+background('pink')
for(T=0;T<TAU;T+=.1)
abs((U=(T+.2*cos(t/w)))%.3-.1)?(quad(A=w*cos(U)+w,(B=w*sin(U))+w,C=w*cos(V=U*t/w)+w,(D=w*sin(V))+w,C,w-D,A,w-B),fill(A,B,C)):0
++t}