//#つぶやきProcessing #p5js
t=0,d=19
draw=_=>{createCanvas(W=(w=200)*2,W)+noStroke()+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)fill(D=max(abs(X=x-w),abs(Y=y-w),w-mag(X,Y)),(E=abs(d*cos(D+x*y+t/41)))*20,W-D),
rect(x,y,D/6,D/6,E/3,E/3)
++t}