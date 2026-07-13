//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+background('blue')+blendMode(DIFFERENCE)
fill(t%2?W:'green')
circle(150*cos(T=int(t/2)*2+.2)+w,150*sin(T)+w,w)
++t}