//#つぶやきProcessing #p5js
t=0,A=0
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(x=0;x<W;x+=6)
for(y=0,p=x,q=0;y<W;y+=6)
abs(X=x-w)+abs(Y=y-w)-w<0?(stroke(A=abs(X*Y)%255,w,w),line(q,p,p=150*sin(X+t/w)+w,q=150*sin(Y+t/w)+w)):(stroke(255-A,w,w),line(q,p,q=y,p=x))
++t}