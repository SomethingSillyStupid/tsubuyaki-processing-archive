//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
C=(H,T)=>(fill(H,w,w),circle(R*cos(T)+w,R*sin(T)+w,2*R*sin(d*t/w)))
colorMode(HSB)
blendMode(DIFFERENCE)
noStroke(d=TAU/24)
R=99
for(T=0;T<TAU;T+=d)C(H=T/TAU*360,T),C(360-H,T+d/2+t/w)
t++}