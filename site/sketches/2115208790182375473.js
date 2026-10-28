//#つぶやきProcessing #p5js
t=0
draw=_=>{L=(a,b,c)=>(X=1-x)*X*a+2*x*X*b+x*x*c
C=(T,R=w)=>R*cos(T)+w
P=(T,d)=>(L(C(T+.3),C(T+d/18,d),C(T-.3)))
createCanvas(W=(w=200)*2,W)+strokeWeight(2)
for(T=0;T<TAU;T+=PI/17)for(x=0;x<1;x+=.001)point(P(U=T+t/w,D=w*sin(t/w)),P(U-1.6,D))
++t}