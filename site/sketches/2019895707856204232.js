//#つぶやきProcessing #p5js
t=0,S=0,g=-1
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
C=x=>(N+r(N/9))*6*cos(x)+w
A=x=>abs(sin(x))
S+=g/(r(t%99)+1)
g=-g
N=6/abs(asin(S/4))
for(T=0;T<N;T+=.1)
stroke(W*A(T*N),W*A(N),W*A(U=T/N*7+S)),
point(C(U),C(U-1.6))
}