//#つぶやきProcessing #p5js
t=0
draw=_=>{L=(a,b,c)=>(X=1-x)*X*a+2*x*X*b+x*x*c
C=(T,R=w)=>R*((X=cos(T))<0?-1:1)*abs(X)**.4+w
P=(T,d)=>(L(C(T+d),C(T,d*9),C(T-d)))
createCanvas(W=(w=200)*2,W)
for(T=0;T<TAU;T+=.1)for(x=0;x<1;x+=.005)point(P(U=T+t/w,D=15*sin(t/97)),P(U-1.6,D))
++t}