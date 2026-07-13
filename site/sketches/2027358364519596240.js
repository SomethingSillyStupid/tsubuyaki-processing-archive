//#つぶやきProcessing #p5js
t=0
draw=_=>
{r=random
t||createCanvas(W=(w=200)*2,W)
t++%W||(F=r(W))
T=t%W
for(y=0,p=w;y<W;y+=8)
x=W-T+8/sin(y/F+T),
mag(x-w,y-w)<150?line(W-T+8*cos(y+T/F),p,x,p=y):0,
stroke(r((F*y)%W),r(T+p),r(r(F*x)%W),31)}