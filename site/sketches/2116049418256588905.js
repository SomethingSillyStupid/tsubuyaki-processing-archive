//#つぶやきProcessing #p5js
t=0
draw=_=>{
L=(a,b,c)=>(X=1-x)*X*a+2*x*X*b+x*x*c
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill(P=2*W,Q=3*W,R=P+P)
A=t=>t<W?t:t<P?W:t<Q?(Q-t):0
for(x=0;x<1;x+=.001)stroke(T=t%360,w,w),
point(L(a=A(t),W-T,b=A((t+Q)%R)),L(b,T,a))
t=(t+=19)%R
}