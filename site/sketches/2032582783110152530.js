//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
strokeWeight(30)
for(i=0;i<9;i++)
for(x=0;x<W;x++)
(R=abs(x-w)+abs((y=99*cos(t/91+x/W*TAU+i*PI)+i*W/9)-w))<w?(stroke(R*2,w,w),point(x,y)):0
++t}