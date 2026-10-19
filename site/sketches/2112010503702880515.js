//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+strokeWeight(3)+colorMode(HSB)
for(T=0;T<TAU;T+=.02)
for(b=0;b<5;b+=.3)
stroke(b*90,R=(asin((T+t/31)%2-1)+b*sin(t/47))*90,w),
point(R*sin(U=T+t/w)+w,R*cos(U)+w)
++t}