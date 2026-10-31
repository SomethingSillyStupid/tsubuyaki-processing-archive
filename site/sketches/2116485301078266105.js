//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(P=2*W,Q=3*W,R=P+P)
A=t=>(T=t%R)<0?A(T+R):T<W?T:T<P?W:T<Q?(Q-t):0
F=x=>x*(x-R)/w*2
stroke(A(t)%360,w,w)
line(A(t),A(F(t)-W),A(F(t)+W),A(t))
t=(t+=13)%R
}