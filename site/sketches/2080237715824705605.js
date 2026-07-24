//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
P=x=>abs(x)**N*(x<0?-1:1)
strokeWeight(4)
N=9-t/4
for(T=0;T<TAU;T+=.01)
point(120*(P(cos(T))-P(sin(T)))+w,120*(P(sin(T))+P(cos(T)))+w)
t+=N>1?.1:1}