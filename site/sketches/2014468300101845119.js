//#つぶやきProcessing #p5js
t=0,d=19
draw=_=>{
c=cos,s=sin,n=noise
t||createCanvas(W=(w=200)*2,W)
for(i=0;i<W;i++)
stroke(A=W*s(T=(t/W+i)%W),B=W*c(T),C=w*tan(T)),
line(X=(T=W*s(t/w))+(s(T)+n(T))*d,0,Y=T+(c(T)+n(T))*d,W),
stroke(C,B,A),
line(W,Y,0,X)
t+=d}