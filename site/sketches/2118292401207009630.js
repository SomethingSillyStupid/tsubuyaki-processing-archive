//#つぶやきProcessing #p5js
t=0,d=17
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)Q=min(X=d*cos(x+y),Y=d*sin(x-y),d-X,d-Y),
stroke(abs(Q)*17,w,w),rect(x,y,A=71*cos(Q+t/37),B=71*sin(Q-t/37),abs(B/4),abs(A/4))
++t}