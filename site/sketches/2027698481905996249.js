//#つぶやきProcessing #p5js
t=0,d=64
draw=_=>
{r=random
t||createCanvas(W=(w=200)*2,W)
t++%W||(F=r(W))
for(P=p=0;P<TAU;P+=.6)
x=W*sin(Q=P+(T=t%W)/F)+w,
stroke(r(T),r(F+x)%W,r(abs(W-T)),w),
line(x,W*cos(Q)+w,99*cos(R=Q*sin(t/F))+w,p=99*sin(R)+w)}