//#つぶやきProcessing #p5js
t=0,d=10,e=.5
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(T=0;T<TAU;T+=.001)
for(R=1,p=q=w;R<w;R+=d)
stroke(abs(w*sin(t/27)),w*cos(R+T),w),
line(p,q,p=R*cos(U=T+r(-e,e))+w,q=R*sin(U)+w)
++t}