//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
D=n=>n<1?0:(P.push(r(.3)),D(n-1))
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()
t%19||(U=0,P=[],D(71),M=r(W))
for(T of P)stroke((T*U)%60+M,w,w,.3),
strokeWeight(T*3),
arc(w,w,t+T,t-T,U+=T,U+=T)
t=++t%(2*W)}