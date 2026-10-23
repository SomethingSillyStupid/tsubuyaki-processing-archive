//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
for(T=0;T<TAU;T+=.01)
point(180*P(C=cos(T+t/w),D=sin(U=T+t/19))+w,180*P(sin(T-t/w),D)+w),
stroke(abs(W*C*D)%360,w,w,.3)
++t}