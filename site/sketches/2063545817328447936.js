// #minacoding #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
D=t-w
for(R=(t<w?0:D*3);R<(t<w?9:D**2);R++)
for(T=0;T<TAU;T+=.07)
stroke(int(r(4))*63,w,w),
strokeWeight(r(40)),
point(R*cos(U=T*t)+w+r(-9,9),R*sin(U)+w+r(-9,9))
t=++t%240}