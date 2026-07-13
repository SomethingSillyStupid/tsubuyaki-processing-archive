//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
t||(F=random(255))
I=n=>(i+n+t/71)/12*TAU
C=T=>w*cos(T)+w
P=PI/2
colorMode(HSB)
for(i=0;i<12;i++)
fill((i*3*F)%255,w,w,.6),
triangle(C(I(0)+t/71),C(I(0)-P),C(I(4)),C(I(4)-P),C(I(8)),C(I(8)-P))
t=++t%(71*6)}