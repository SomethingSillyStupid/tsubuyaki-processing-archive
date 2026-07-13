//#つぶやきProcessing #p5js
t=0,N=12
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t++%99||(F=r(9),G=r(9),H=r(w))
strokeWeight(W/20)
for(i=0;i<N;i++)for(x=0;x<W;x++)(R=mag(x-w,(y=W/N/2*sin(i*t/w*6+x/F)+i*W/N)-w))<w?(stroke((x/F+y/G+R*sin(t/H))%w,w,w),point(x,y)):0}