//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+noFill()
m=x=>abs(M[int(x)%4])
M=[T=w+w*sin(t/9),W-T,S=w+w*cos(t/9),W-S],
stroke(m(T*2),m(T*4),m(T+2),w),
circle(x=m(T),y=m(T+2),[max,min][t%2](W-T,W-S,dist(w,w,w*cos(t/7)+w,w*sin(t/7)+w)))
++t}