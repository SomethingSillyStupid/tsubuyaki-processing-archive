//#つぶやきProcessing #p5js
t=0,d=64
draw=_=>
{r=random
t||createCanvas(W=(w=200)*2,W)
t++%W||(F=r(W))
for(P=p=0;P<TAU;P+=.6)
x=w*sin(Q=P+t/F)+w,
stroke(...shuffle([r(T=t%W),r(F+x)%W,r(abs(W-T))]),w),
line(x,w*cos(Q)+w,w*cos(R=Q-t/F)+w,p=w*sin(R)+w)}