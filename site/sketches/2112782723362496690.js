//#つぶやきProcessing #p5js
t=0,N=400
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
for(c=-9;c<9;c+=.5)
for(d=-9;d<9;d+=.5)
for(T=0;T<TAU;T+=TAU/N)
stroke(abs(c*d*t)%360,w,w),
point(150*P(cos(T),c)+w,150*P(sin(T),d)+w)
++t}