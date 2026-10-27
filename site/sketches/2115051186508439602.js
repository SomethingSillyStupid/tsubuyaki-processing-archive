t=0
draw=_=>{background(0,t++?.1:!createCanvas(W=720,W)+W)
colorMode(HSB)
filter(BLUR)
S=.2
for(r=0;r<89;r+=.12)stroke(W)+noFill()+circle(X=cos(r)*r*6+360,Y=sin(r)*r*6+360,r/2)+noStroke()+fill(r*W%360,W,W*sin((A=noise(r,t/99)*3)*2))+arc(X,Y,r/3,r/3,r-A,r+A)}