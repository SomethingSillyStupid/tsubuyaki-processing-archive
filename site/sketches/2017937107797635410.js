//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
blendMode(DIFFERENCE)
background(A=w*cos(t/51),B=w*sin(t/57),C=w*cos(t/53))
for(x=0;x<W;x+=40)
stroke(C*cos(x),A*sin(x),B),
strokeWeight(20),
line(x,0,x,W),
line(0,x,W,x)
++t}