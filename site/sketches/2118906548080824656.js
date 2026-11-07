//#つぶやきProcessing #p5js
t=0,d=11
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()+rectMode(CENTER)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)Q=min(X=d*cos(t/w+x+y),Y=d*sin(t/w+x-y),d-X,d-Y)*2,
fill(abs(Q)*11,w,w,.3),rect(x,y,A=Q*sin(x/w),B=Q*sin(y/w),abs(A),abs(B))
++t}