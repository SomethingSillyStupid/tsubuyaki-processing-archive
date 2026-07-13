//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()
for(R=0,T=r(.01,.1);R<w;R+=.003)
stroke(w*sin(R/6+t/w),w,w,.8),
circle(x=R*cos(U=R/T)+w,y=R*sin(U)+w,min(x,y,W-x,W-y)/T/2)
++t}