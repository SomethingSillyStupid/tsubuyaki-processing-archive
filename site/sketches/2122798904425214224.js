//#つぶやきProcessing #p5js
t=0,d=19
draw=_=>{createCanvas(W=(w=200)*2,W)+noFill()+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)stroke(D=max(X=x-9*cos(t/w)-w,Y=y-9*sin(t/w)-w,W-mag(X,Y))/4,(E=abs(d*cos(D/w*t/6)))*9,W-D),
rect(x,y,D,D,E/6,E/6)
++t}