//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
for(x=0;x<W;x+=9)
for(y=0;y<W;y+=9)
T=atan2(Y=y-w,X=x-w),
fill(M=mag(X,Y)%360,w,w,.3),circle(x,y,dist(x,y,w*cos(U=T+M+t/31)+w,w*sin(U)+w)/9)
++t}