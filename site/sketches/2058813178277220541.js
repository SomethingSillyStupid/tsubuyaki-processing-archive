//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)+blendMode(DIFFERENCE)+noStroke(P=1.6,t++)
C=x=>R*cos(x)+w
for(R=0;R<w;R+=30)
for(T=0;T<TAU;T+=.3)
fill((R*T)%255,w,w),
triangle(C(U=T+t/71),C(U-P),C(U=T+P+t/w),C(U-P),C(U-=t/51),C(U-P))}