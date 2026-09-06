//#つぶやきProcessing #p5js
t=0,d=16
draw=_=>{t++||createCanvas(W=(w=200)*2,W)+strokeWeight(24)
A=x=>abs(255*cos(x))
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)stroke(A((P=cos(x+t/91)**sin(y*33+t/71))-x),A((D=log(1-P))-y),A(x+(E=sqrt(P-.2))-x),9),
point(x+d*sin(D+t/w),y+d*cos(E-t/w))}