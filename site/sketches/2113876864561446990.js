//#つぶやきProcessing #p5js
t=0
draw=_=>{
D=n=>n<1?0:(P.push(random(TAU)),D(n-1))
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t%13||(U=0,P=[],D(37))
for(T of P)
point((R=t*t/16)*cos(U+=T)+w,R*sin(U)+w),
strokeWeight(R/t*3)
t=++t%90}