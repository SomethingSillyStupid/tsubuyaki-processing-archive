//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
D=n=>n<1?0:(P.push(r(TAU)),D(n-1))
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t%19||(U=0,P=[],D(71),M=r(W))
for(T of P)stroke((T+U)%90+M,w,w),strokeWeight((U+=T)%9),
point((R=w*max(0,cos(t*t/w/w)))*cos(T)+w,R*sin(T)+w)
t=++t%W}