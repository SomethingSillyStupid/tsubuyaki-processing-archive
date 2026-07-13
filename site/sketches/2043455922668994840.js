//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)
m=x=>w*M[x%4]+w
M=[cos(T=t%(W*4)/77),sin(T),cos(T+1.8),sin(T+1.8)]
stroke(m(T=int(t/17)),m(T+3),m(T-3))
line(m(T),m(T+1),m(T+2),m(T+3))}