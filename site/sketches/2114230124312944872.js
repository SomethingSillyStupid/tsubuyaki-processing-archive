//#つぶやきProcessing #p5js
t=0
draw=_=>{
D=n=>n<1?0:(P.push(random(TAU)),D(n-1))
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t%23||(U=0,P=[],D(13))
for(T of P)
stroke(S=random(P)*60,w,w),
point((R=t*sin(tan(T)))*cos(U+=T)+w,R*sin(U+=T)+w),
strokeWeight(S%13)
t=++t%w}