//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+strokeWeight(d=random(4,19))
for(r=0;r<W;r+=d)
for(p=(T=t/w);p<TAU+T;p+=.5)
stroke((w*cos(p+r-t/w)+130)%W,w,w,.1),
point((R=r-t/T+p)*cos(R-r)+w,R*sin(R+r)+w)
t=++t%w}