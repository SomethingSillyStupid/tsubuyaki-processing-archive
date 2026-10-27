//#つぶやきProcessing #p5js
t=0
draw=_=>{
L=(a,b,c)=>x=>(X=1-x)*X*a+2*x*X*b+x*x*c
C=(T,R=w)=>R*cos(T)+w
createCanvas(W=(w=200)*2,W)+strokeWeight(2)
for(T=0;T<TAU;T+=PI/57)
for(x=0;x<1;x+=.01)
point(L(C(T+.3),C(T,S=w-t),C(T-.3))(x),L(C((U=T-1.6)+.3),C(U,S),C(U-.3))(x))
t=++t%W
}