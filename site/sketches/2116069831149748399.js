//#つぶやきProcessing #p5js
t=0
draw=_=>{
L=(a,b,c)=>(X=1-x)*X*a+2*x*X*b+x*x*c
t||createCanvas(W=(w=200)*2,W)+(P=2*W,Q=3*W,R=P+P)
A=t=>t<W?t:t<P?W:t<Q?(Q-t):0
for(x=-0;x<1;x+=.01)
point(L(a=A(t),w*cos(t)+w,b=A((t+Q)%R)),L(b,w*sin(t)+w,a))
t=(t+=17)%R
}