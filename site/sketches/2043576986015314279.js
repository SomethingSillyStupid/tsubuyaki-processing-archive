//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+noFill()
m=x=>w*M[int(x%4)]+w
M=[cos(T=t%W/81),sin(T),acos(U=T%1*2-1)/PI,(asin(U)+1.6)/PI]
stroke(m(T=t/71),m(T+1),m(T-2))
line(m(T),m(T+1),m(T+2),m(T+3))}