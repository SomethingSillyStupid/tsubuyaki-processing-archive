//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
t||(P=[],B=r(255))
for(x=0;x<W;x+=d)
for(y=0,P[x]?0:P[x]=[];
y<W;y+=d)
fill(p=(p=P[x][y])?p:P[x][y]=B+r(-70,70),w,w,.3),
arc(x+d/2,y+d/2,d*4,d*4,A=x*y+t/51,A+p)
t=++t%w}