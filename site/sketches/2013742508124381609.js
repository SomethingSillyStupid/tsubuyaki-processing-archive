//#つぶやきProcessing #p5js
t=0
draw=_=>{P=TAU
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
if(!t)for(i=0,A=[];i<w;i++)A.push(random(P))
for(T=0;T<TAU;T+=P/17,line(x,y,w,w))for(i=1,U=0,x=y=w;i<w;i++)
stroke((U+i+t)%w,w,w),
line(x,y,x+=9*cos(S=T+(U+=A[i]+t/W)),y+=9*sin(S))
t=++t%33}