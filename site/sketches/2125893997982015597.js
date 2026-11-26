//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)+(A=r(360),B=(A+180)%360)
colorMode(HSB)
background(B,w,w)
strokeWeight(8)
for(R=0;R<w;R+=r(10,30))
for(T=0;T<TAU;T+=r()<.001?r(.1,.2):.0001)
stroke(A,w,w),
point(R*cos(T)+w,R*sin(T)+w)
++t}