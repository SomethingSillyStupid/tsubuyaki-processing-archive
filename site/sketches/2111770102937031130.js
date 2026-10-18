//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(3)+colorMode(HSB)
for(b=0;b<3;b+=.2)
for(T=0;T<TAU;T+=.02)
R=(b*sin(t/91)*cos(T)+b)*90,
point(R*sin(U=T+t/71)+w,R*cos(U)+w)
++t}