//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++%400||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(B=random(255))
for(R=0;R<W;R+=9)
for(T=0;T<TAU;T+=PI/(int(t/w)+2)%W)
fill((R*cos(U=R*T+t/77)+B)%255,w,w),
Q=max(x=R*sin(U)+w,y=R*cos(U)+w,W-x,W-y),
circle(x,y,Q)
}