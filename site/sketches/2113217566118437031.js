//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
for(T=0;T<TAU;T+=.01)
point(X=w*P(C=cos(T+t/w),D=1+.5*sin(U=T+t/19))+w,Y=w*P(sin(T-t/w),D)+w),
stroke(abs((X+Y)*C)%360,w,w,.3)
++t}