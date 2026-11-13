//#つぶやきProcessing #p5js
t=0,d=31
draw=_=>{createCanvas(W=(w=200)*2,W)+noFill(a=abs,D=d*13)+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)stroke(M=mag(X=x-99*cos(t/71)-w,Y=y-99*sin(t/71)-w),(A=a(atan2(Y,X)))*51,99),
rect(x,y,Y,X,A,A)
++t}