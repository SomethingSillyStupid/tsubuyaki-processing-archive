//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()
X=(R=w*cos(t/37))*cos(t/w)+w,Y=R*sin(t/w)+w
T=atan2(Y-w,X-w);
(M=mag(X-w,Y-w))<w?(stroke(abs(w-M*sin(X+Y)),w,w,M/w),circle(X,Y,dist(X,Y,w*cos(T)+w,w*sin(T)+w))):0
++t}