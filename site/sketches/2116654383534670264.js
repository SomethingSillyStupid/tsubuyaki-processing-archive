//#つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)+(P=2*W,Q=3*W,R=P+P)
L=(a,b,c)=>(X=1-x)*X*a+2*x*X*b+x*x*c
A=t=>(T=t%R)<0?A(T+R):T<W?T:T<P?W:T<Q?(Q-t):0
for(x=0;x<1;x+=.001)stroke(0,0,x*w),point(L(A(t),A(t+W),A(t+P)),L(A(t+W),A(t+Q),A(t+P)))
t=(t+=47)%P}