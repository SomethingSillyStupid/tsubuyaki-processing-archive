//#つぶやきProcessing #p5js
t=0,N=500
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
for(T=0;T<TAU;T+=TAU/N)
point(X=99*P(cos(T),3*sin(T*t/19))+w,Y=99*P(sin(T),3*cos(T-t/17))+w),
stroke(abs((X+Y)*cos(T))%360,w,w)
++t}