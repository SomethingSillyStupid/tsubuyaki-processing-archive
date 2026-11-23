//#つぶやきProcessing #p5js
t=0,N=16
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()+rectMode(CENTER)
d=W/N
for(i=0;i<=2*N;i++)for(j=0;j<=2*N;j++)
fill(int((i+j+t/17))%3==0?'#FF8C00':'#008080'),
quad(x=i*d,y=j*d,x+d*tan(t/w),y+d,X=x-W,Y=y-W,X-d,Y+d*tan(t/w))
++t}