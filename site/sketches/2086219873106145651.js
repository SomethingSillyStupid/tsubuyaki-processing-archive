//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
X=r(W),Y=r(W)
T=atan2(Y-w,X-w);
(M=mag(X-w,Y-w))<w?(fill(abs(M*sin(X+Y)),w,w,M/w),circle(X,Y,dist(X,Y,w*cos(T)+w,w*sin(T)+w))):0
++t}