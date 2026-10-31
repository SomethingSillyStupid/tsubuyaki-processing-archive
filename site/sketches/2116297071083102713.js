//#つぶやきProcessing #p5js
t=0
draw=_=>{L=(a,b,c)=>(X=1-x)*X*a+2*x*X*b+x*x*c
A=t=>t<W?t:t<P?W:t<Q?(Q-t):0
T=t=>w*cos(t)+w
t||createCanvas(W=(w=200)*2,W)+(P=2*W,Q=3*W,R=P+P)
for(x=0;x<1;x+=.001)
stroke(9,w,T(t)),
point(L(C=T(t/w),A(t),S=T(t/w-1.6)),L(S,A((t+W)%R),C))
t=(t+=91)%R}