//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
background(0,.1)
C=(H,T)=>(stroke(H,w,w,.4),circle(R*cos(T)+w,R*sin(T)+w,2*R*sin(d+t/29)))
noFill(d=TAU/18)
R=150
for(T=0;T<TAU;T+=d)C(H=T/TAU*360,T),C(360-H,T+d/2*t/17)
t++}