//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()+rectMode(CENTER)
for(x=0;x<W;x+=9)
for(y=0;y<W;y+=9)
T=atan2(Y=y-w,X=x-w),
stroke(mag(X,Y)%360,w,w,.3),rect(x,y,dist(x,y,w*cos(U=T+t/w)+w,w*sin(U)+w)/3)
++t}