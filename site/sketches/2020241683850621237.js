//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+(S=0,g=-1,A=r(9))
background(0,1)
C=x=>N*9*cos(x)+w
S+=g/(2*t+1)
g=-g
N=PI/asin(S/2)**2
for(T=0,p=N*9+w,q=w;T<N;T++)
stroke(N*r(t),w-r(t),N*r(t)),
line(p,q,p=C(U=A*T/N*TAU),q=C(U-1.6))
t=++t%W}