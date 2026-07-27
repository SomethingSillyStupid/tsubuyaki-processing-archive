//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
colorMode(HSB)
strokeWeight(3)
F=t%w/20
for(R=0;R<w;R+=8)
for(T=0;T<TAU;T+=.3)
point(X=R*P(cos(T),F)+w,Y=R*P(sin(T),F)+w),
stroke((X+Y+R*random(F))/F%360,w,w)
++t}