//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
background(A=w*cos(t/51),B=w*sin(t/57),C=w*cos(t/53))
for(x=0;x<W*2;x+=40)
stroke(C*cos(x),A*sin(x),B),
strokeWeight(13.3),
x<W?line(x,0,0,x):line(min(W,x),x-W,x-W,W)
++t}