//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(b=0;b<6;b+=.3)
for(T=0;T<TAU;T+=.05)
stroke(b*90,R=(cos(T)+b)*90,w),
point(R*sin(U=T+t/71)+w,w-R*cos(U))
++t}