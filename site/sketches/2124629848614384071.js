//#つぶやきProcessing #p5js
t=0,d=17
draw=_=>{createCanvas(W=(w=200)*2,W)+noFill()+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)stroke(D=min(x,y,W-x,W-y)*sin((x*y+t)/w)*2,abs(E=w*cos(D/91))*2,w-D),
rect(x+D/4,y+E/2,D/4,E/2)
++t}