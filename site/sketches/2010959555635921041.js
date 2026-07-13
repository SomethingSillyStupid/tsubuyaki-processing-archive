//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
noFill()
for(T=0;T<TAU;T+=.02)
stroke(w*cos(t),W*sin(t),w),
bezier(w*cos(T)+w,w*sin(T)+w,(R=w+r(-10,10))*cos(T)+w,R*sin(T)+w,w,w,(R=w+r(-30,30))*cos(U=PI+T-r(-3,3))+w,R*sin(U)+w)
t+=.05}