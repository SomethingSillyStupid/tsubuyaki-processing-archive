//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+strokeWeight(d=random(6,9))
for(r=1;r<W;r+=d)
for(p=0;p<TAU;p+=1/r)
(abs(w/d*cos(X=r*cos(T=r/p))-w/d*cos(Y=r*sin(p)))<r/p*t)?(stroke(abs(r-p*t*d)%W,w,w),point(X+w,w-Y)):0
t=++t%30}