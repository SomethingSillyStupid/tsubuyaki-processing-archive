//#つぶやきProcessing #p5js
t=0,d=11
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill(D=d*1.5)+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)stroke(M=abs(mag(X=x-w,Y=y-w)*sin(t/w)),w,w),
rect(x,y,A=M/2*sin(X/50),B=M/2*sin(Y/50),abs(A/4),abs(B/4))
++t}