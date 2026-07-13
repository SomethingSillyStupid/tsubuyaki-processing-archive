//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+blendMode(DIFFERENCE)
C=x=>w*cos(x)+w
for(R=0;R<w;R+=10)
for(T=0;T<TAU;T+=.1)
fill((R*T)%255,w,w),
quad(C(U=T+t/403),C(U-1.6),C(U+=.1),C(U-1.6),C(U=T+PI*t/w),C(U-1.6),C(U+=.1),C(U-1.6))}