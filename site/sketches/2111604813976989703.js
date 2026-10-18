//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+strokeWeight(3)+colorMode(HSB)
for(T=0;T<TAU;T+=.02)
for(b=0;b<6;b+=.1)
stroke(b*90,R=(tan(T+t/71)**3+b)*90,w),
point(R*sin(U=T)+w,w-R*cos(U))
++t}