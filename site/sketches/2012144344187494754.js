t=0
draw=_=>{background(0,t++?9:!createCanvas(W=720,W)+W)
stroke(W)
filter(BLUR)
for(d=0;d<540;d+=60)for(r=0;r<TAU;r+=PI/32)line(X=cos(R=r+t/99+d)*d+360,sin(R)*d+360,cos(R+=sin(t/60-d)*(1-d/540))*(L=d+9)+360,Y=sin(R)*L+360)+circle(X,Y,3)}