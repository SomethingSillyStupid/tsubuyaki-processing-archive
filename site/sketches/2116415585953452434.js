//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(P=2*W,Q=3*W,R=P+P)
A=t=>(T=t%R)<0?A(T+R):T<W?T:T<P?W:T<Q?(Q-t):0
stroke(t%360,w,w)
line(A(t),A(t-W),A(t+W),A(t))
t=(t+=19)%R
}