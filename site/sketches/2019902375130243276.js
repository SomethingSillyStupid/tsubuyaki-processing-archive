//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+(S=0,g=-1)
C=x=>R*cos(x)+w
S+=g/(2*t+1)
g=-g
N=PI/asin(S/2)**2
R=r(w)
for(T=0,p=R+w,q=w;T<N+1;T++)
stroke([W,'#ce2b37','#009246'][int(R/30+N)%3]),
line(p,q,p=C(U=T/N*TAU),q=C(U-1.6))
t=++t%W}