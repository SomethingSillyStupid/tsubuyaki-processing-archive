//#つぶやきProcessing #p5js
t=0,d=13
draw=_=>{createCanvas(W=(w=200)*2,W)+noFill(a=abs,D=d*13)+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)stroke(M=a(mag(X=x-w,Y=y-w)%w*sin(t/w)),a(A=D*cos(M/50)),a(B=D*sin(M/50))),
rect(x,y,G=A/2,H=B/2,a(G-H),a(H-G))
++t}