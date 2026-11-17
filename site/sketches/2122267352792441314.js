//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=_=>int(random(2,7))
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(N=r()*PI,M=N+r()*PI)
for(x=-1;x<1;x+=.01)
for(y=-1;y<1;y+=.01)
strokeWeight(I=abs(cos(x*N)*cos(y*M)-cos(x*M)*cos(y*N))),
stroke(I*w,w,w),
point(x*w+w,y*w+w)
t=++t%9}