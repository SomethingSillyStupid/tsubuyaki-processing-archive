//#つぶやきProcessing #p5js
t=0
draw=_=>{L=(a,b,c)=>(X=1-x)*X*a+2*x*X*b+x*x*c
C=(T,R=180)=>R*((X=sin(T))<0?-1:1)*abs(X)**S+w
P=T=>L(C(T+1),C(T+D,w),C(T-1))
createCanvas(W=(w=200)*2,W)
for(T=0,S=t++/w;T<TAU;T+=.31)for(x=0;x<1;x+=.002)point(P(U=T+(D=44*sin(S))),P(U-1.6))}