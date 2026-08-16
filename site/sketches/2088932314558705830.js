//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+background('magenta')+noStroke()+rectMode(CENTER)
blendMode([OVERLAY,DIFFERENCE,DODGE,BURN][t%4])
fill(['cyan','gold','lime'][t%3])
rect(150*cos(T=t/7)+w,150*sin(T)+w,w*sin(t/31))
++t}