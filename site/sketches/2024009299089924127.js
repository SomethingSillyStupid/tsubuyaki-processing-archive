//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
T=PI/5,p=r(T),C=(R,x)=>R*cos(x)+w
for(i=0;i<W*4;i++){
stroke((V=r(T))+(i%W),R=r(w),i+t%W)
for(U=0;U<TAU;U+=T*2)
circle(C(R,O=U+V-p),C(R,O-1.6),5),circle(C(R,O=U-V+p),C(R,O-1.6),5)}
++t}