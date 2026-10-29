//#つぶやきProcessing #p5js
t=0
draw=_=>{L=(a,b,c)=>(X=1-x)*X*a+2*x*X*b+x*x*c
C=(T,R=99)=>R*((X=cos(T))<0?-1:1)*abs(X)**S+w
P=(T,d)=>L(C(T+.6),C(T+d/9,d*5),C(T-.6))
createCanvas(W=(w=200)*2,W)
for(T=0,S=t++/w;T<TAU;T+=.1)for(x=0;x<1;x+=.002)point(P(U=T+S,D=w*sin(S)),P(U-1.6,D))}