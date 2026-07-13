//#つぶやきProcessing #p5js
t=0
draw=_=>{P=TAU
createCanvas(W=(w=200)*2,W)
if(!t)for(i=0,A=[];i<50;i++)A.push(random(P))
d=20
for(T=0;T<TAU;T+=P/13,line(x,y,w,w))for(i=1,U=0,x=y=w;i<A.length;i++)
line(x,y,x+=d*cos(S=T+(U+=A[i])),y+=d*sin(S))
t=++t%w}