//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+strokeWeight(d)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
(X=x/w)**3+(Y=y/w)**3-3.7*X*Y<.01?(stroke(A=W*sin(X*t/w),B=W*cos(Y-t/77),A-B),point(x,y)):point(y,x)
t++}