//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(u=0;u<TAU;u+=.1)
for(R=0,B=[u,u+1.6];R<W;R+=4)point(...B.map(x=>(stroke(R,w,w),strokeWeight((R-x*u)%18),R*cos(x*t/R/9+u+x)+w)))
++t}