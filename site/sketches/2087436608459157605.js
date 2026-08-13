//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
for(x=0;x<W;x+=9)
for(y=0;y<W;y+=9)
T=atan2(Y=y-w,X=x-w),M=mag(X,Y),
(M%56<31)?(fill(abs(360-M)%360,w,w,.3),circle(x,y,min(x,y,w*cos(U=T+t/M)+w,w*sin(U)+w)/8)):0
++t}