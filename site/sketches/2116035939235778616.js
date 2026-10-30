//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill(P=2*W,Q=3*W,R=P+P)
A=t=>t<W?t:t<P?W:t<Q?(Q-t):0
stroke(T=t%W,w,w)
circle(A(t),A((t+Q)%R),W)
t=(t+=19)%R
}