//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=_=>int(random(2,7))
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(T=tan,N=r()*PI,M=N+r()*PI)
for(x=-1;x<1;x+=.01)for(y=-1;y<1;y+=.01)strokeWeight((I=abs(T(x*N)*T(y*M)-T(x*M)*T(y*N)))%4),stroke((I*W)%360,w,w),point(x*w+w,y*w+w)
t=++t%9}