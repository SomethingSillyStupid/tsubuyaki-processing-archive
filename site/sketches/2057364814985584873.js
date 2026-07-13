//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
C=(T=TAU)=>T<0?0:(stroke((R*d+i*T)%255,w,w),point(R*cos(T)+w+d,R*sin(T)+w),C(T-.008))
noFill()
for(i=d=0,R=550;R>0;i++)
C(),
d+=random(-2,2),
R-=abs(d)/2
++t}