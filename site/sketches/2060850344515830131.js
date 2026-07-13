//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+noStroke()+background('blue')+blendMode(DIFFERENCE)
fill(t%2?W:[t%w,W*sin(t/w),99])
circle(150*cos(T=int(t/2)/4+t/w)+w,150*sin(T)+w,w)
++t}