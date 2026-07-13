//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+blendMode(DIFFERENCE)+background('cyan')
for(T=0;T<TAU;T+=.1)
abs((U=(T+.2*sin(t/w)))%.3-.1)?(bezier(A=w*cos(U)+w,(B=w*sin(U))+w,C=w*cos(U+=t/w)+w,(D=w*sin(U))+w,C,w-D,A,w-B),fill(C,A,B)):0
++t}