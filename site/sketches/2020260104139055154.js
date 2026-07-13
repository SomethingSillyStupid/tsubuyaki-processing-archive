//#つぶやきProcessing #p5js
t=0,S=0,g=-1
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+blendMode(OVERLAY)
A=x=>w*abs(sin(x))
S+=g/(2*A(t)+1)
g=-g
N=4/asin(S/2)**2+w
for(x=0;x<W;x++)
stroke(A(t/N),A(t/N-1.6),A(t*N)),
point(x,N*cos(x/N+t)+w)
}