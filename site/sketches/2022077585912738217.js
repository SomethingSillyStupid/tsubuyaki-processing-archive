//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+strokeWeight(d)
t||(D=r(-1,1))
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
V=(D*W/(R=dist(x,y,w,w+w*sin(t/19)))+W/(Q=dist(x,y,w+w*cos(t/19),W))),
abs(int(V/2)*2-V)<1?(stroke(V/3,Q,R),point(x,y)):0
t=++t%w}