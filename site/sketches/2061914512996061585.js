//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(x=0;x<W;x+=6)
for(y=0,p=x,q=0;y<W;y+=6)
(X=(x-w))**2+(Y=(y-w))**2-w*w<0?(stroke(255*cos(X/Y),w,w),line(p,q,p=x+X/9*sin(t/71),q=y+Y/9*cos(y-t/17))):(stroke(9),line(q,p,q=y,p=x))
++t}