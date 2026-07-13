//#つぶやきProcessing #p5js
t=0,N=99
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke(L=random(8),C=x=>w*cos(x*t/9)+w,F=(H,x,u)=>(fill(H,w,w),rect(x,C(u),3)),S=sqrt)
for(n=0;n<N;n++)o=S(L+(B=(L*L-2/L*cos(n/N*TAU)))),F(O=o*t%W,X=n/N*W,o),
F(W-O,X,S(L-B))
t=++t%W}