//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=_=>int(random(9,50))
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(N=r(),M=r(),B=r()*7)
for(x=-1;x<1;x+=.01)for(y=-1;y<1;y+=.01)stroke((abs(cos(x*N)*cos(y*M)-sin(x*M)*sin(y*N))*w+B)%360,w,w),point(x*w+w,y*w+w)
t=++t%9}