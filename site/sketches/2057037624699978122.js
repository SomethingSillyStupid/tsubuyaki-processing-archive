//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
background(220,W,W,.01)
for(i=0;i<w;i++)
M=(D=(y=r(W))+w*sin((x=r(W))/9))<w,
(t%W<w)^M?(fill(r(D,185),w,w),circle(x,y,8)):0
++t}