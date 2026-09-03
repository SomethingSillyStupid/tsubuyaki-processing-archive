//WIP #つぶやきProcessing #p5js
t=0,d=16
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(d)
A=x=>abs(255*cos(x))
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke(A((P=cos(x+t/77)/sin(y-t/17))-x),A(P-y),A(x+y+P)),
point(x+d*P,y+d*sqrt(1-P*P))
++t}