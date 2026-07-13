//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+noStroke()+rectMode(CENTER)+background('blue')
blendMode(DIFFERENCE)
fill(t%2?W:[t%w,W*sin(t/9),99])
translate(150*cos(T=int(t/2)/4+t/w)+w,150*sin(T)+w)
rotate(t/8)
;[rect,circle][t%2](0,0,w)
++t}