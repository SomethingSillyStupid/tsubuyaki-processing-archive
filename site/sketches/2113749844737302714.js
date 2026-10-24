//#つぶやきProcessing #p5js
t=0
draw=_=>{
D=n=>n<1?0:(P.push(random(TAU)),D(n-1))
t%2e3||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t%3||(P=[],D(37))
for(T of P)
point((R=(S=t%60)*S/16)*cos(T)+w,R*sin(T)+w),
stroke((T*S)%360,w,w),
strokeWeight(R/S*2)
++t}