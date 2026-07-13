//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t++%w||(T=r(99,w),D=r(9))
strokeWeight(r(W))
blendMode(DIFFERENCE)
C=(R,x,n=D)=>n<1?0:(R/n*sin(x/n*TAU)-C(R*.9,x,n-1))
stroke(R=abs(C(W,t/T))%w,W,W)
point(C(R,t/71)+w,C(R,t/73-1.6)+w)}