//#つぶやきProcessing #p5js
t=0,d=11
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+strokeWeight(4)
for(r=0;r<W;r+=d)
for(p=(T=t/W);p<TAU+T;p+=.5)
stroke(sin(p-T)*w+90,w,w,79),
point((R=r-t+p)*cos(R*T)+w,R*sin(R*T)+w)
t=++t%W}