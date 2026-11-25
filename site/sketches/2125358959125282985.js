//#つぶやきProcessing #p5js
t=0
draw=_=>{r=_=>int(random(2,9))
t++%9||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(s=sin,N=r(),M=r()+N,B=r()*7)
for(x=-1;x<1;x+=.01)for(y=-1;y<1;y+=.01)stroke((abs(s(x*N)*s(y*M)-s(x*M)*s(y*N))*w+B)%360,w,w),point(w*x*cos(y*PI/2)+w,w*x*s(y*PI/2)+w)}