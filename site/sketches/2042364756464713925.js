//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+noFill()
m=x=>abs(M[x%4])
M=[T=t%W,W,W-T,0],
stroke(m(T*99),m(T*44),m(T/5)),
line(m(T),m(T+1),m(T+2),m(T+3))
circle(m(T),m(T+1),dist(m(T),m(T+1),w,w))
++t}