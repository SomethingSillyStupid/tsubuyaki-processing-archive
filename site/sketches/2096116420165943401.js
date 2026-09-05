//#つぶやきProcessing #p5js
t=0,d=16
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(24)
A=x=>abs(255*cos(x))
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke(A((P=cos(x+t/91)*sin(y*11-t/71))-x),A((D=(.5-P*P))-y),A(x+(E=(P-.2))),w),
point(x+d*D,y+d*E)
++t}