//#つぶやきProcessing #p5js
t=0,d=19
draw=_=>{createCanvas(W=(w=200)*2,W)+noStroke()+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)fill(D=max(x,y,W-x,W-y)/2,(E=abs(d*cos(D/w*t/63)))*8,W-D),
rect(x+D/99,y+E,D*.6,E*.7)
++t}