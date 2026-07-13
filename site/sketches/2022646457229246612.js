//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+noStroke(d=r(w))
fill(X=r(W),Y=r(W),R=r(w))
circle(X,Y,R)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
copy(x,y,d,d,int(r(W/d))*d,int(r(W/d))*d,d,d)
t=++t%99}