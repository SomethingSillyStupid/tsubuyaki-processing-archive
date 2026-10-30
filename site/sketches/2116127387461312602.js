//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+noFill(P=2*W,Q=3*W,R=P+P)+colorMode(HSB)+rectMode(CENTER)
A=t=>t<W?t:t<P?W:t<Q?(Q-t):0
push()
translate(a=A(t),b=A((t+Q)%R))
rotate(random(TAU))
stroke((a+b)%360,w,w)
rect(0,0,w)
pop()
t=(t+=31)%R
}