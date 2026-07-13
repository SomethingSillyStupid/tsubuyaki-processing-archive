//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
L=(R,T)=>R*cos(T+noise(t))+w
for(x=0;x<W;x+=8)
R=dist(w,w,x,t),
strokeWeight(9),
stroke(noise(t+x)*W,w,w),
line(L(R,x),L(R,x-1.6),L(R*.8,x),L(R*.8,x-1.6))
t=++t%W}