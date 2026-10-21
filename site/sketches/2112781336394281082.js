//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(3)
for(T=0;T<TAU;T+=.02)
for(b=-5;b<5;b+=.3)
stroke(abs(R=(b*cos(T*2.5+t/31)+b*sin(t/47))*90),abs(b*25),w-R),
point(R*sin(U=T+t/w)+w,R*cos(U)+w)
++t}