//#つぶやきProcessing #p5js
t=0,d=21
draw=_=>{createCanvas(W=(w=200)*2,W)+noFill()+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)stroke(D=max(x,y,W-x,W-y)/2,(E=abs(d*cos(x*y+t/w)))*40,W-D),
rect(x,y,D/4,D/4,E,E)
++t}