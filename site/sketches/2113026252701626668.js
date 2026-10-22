//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(4)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
for(c=-4;c<4;c++)for(d=-4;d<4;d++)for(T=0;T<TAU;T+=1/w)point(t*P(C=cos(T),c)+w,t*P(sin(T),d)+w),stroke(abs(((c-d)*t*T)*C)%360,w,w)
t=++t%w}