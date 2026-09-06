//#つぶやきProcessing #p5js
t=0,d=16
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(d)
A=x=>abs(255*cos(x+t/17))
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke(A((P=cos(x+t/57)**sin(y-t/17))-x),A(P+y),Q=A(P+x+y)),
point(x+Q/d,y+d*P)
++t}