//#つぶやきProcessing #p5js
t=0,N=500
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
for(T=0;T<TAU;T+=TAU/N)
stroke(abs(t+T*30)%360,w,w),
point(w*P(cos(T),1+.3*sin(T*t/17))+w,w*P(sin(T),1-.3*cos(T-t/17))+w)
++t}