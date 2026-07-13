//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(8)+blendMode(ADD)
background(0)
for(T=0;T<W*3;T+=.05)
C=cos(U=T*(t%w)),S=sin(U),H=Math.cosh(U/W)%W,I=Math.sinh(U/W)%W,stroke(H,I,w*sin(C*S)%w),point(I*C*3+w,H*S*3+w)
t++}