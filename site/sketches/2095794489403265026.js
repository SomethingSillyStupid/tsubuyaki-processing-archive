//Still WIP #つぶやきProcessing #p5js
t=0,d=16
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(30)
A=x=>abs(255*cos(x))
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke(A((P=cos(x+t/23)/sin(y-t/31))-x),A(P-y),A(x+y+(E=sqrt(P**11-y))),w),
point(x+d*P,y+d*E)
++t}