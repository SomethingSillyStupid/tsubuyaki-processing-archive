//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(x=0;x<W;x+=6)
for(y=0,p=x,q=0;y<W;y+=6)
strokeWeight((X=abs(x-w))+(Y=abs(y-w))-w<0?(stroke((X+Y)%255,w,w),line(p,q,p=x+X/5*sin(t/91),q=y+Y/5*cos(t/w)),8):(stroke(9),line(q,p,q=y,p=x),1))
++t}