//#つぶやきProcessing #p5js
t=0,x=y=.1
draw=_=>{
createCanvas(W=(w=200)*2,W)
A=2.1,B=.52+.2*sin(t/7),C=-2.2,D=-.4
strokeWeight(2)
for(i=0;i<1e4;i++)
K=A*((X=x*x)+(Y=y*y))+B*x*(X-3*Y)+C,
[x,y]=[K*x+D*(X-Y),K*y-2*D*x*y],
stroke(K*w,X*w,Y*w),
point(x*w+w,y*w+w)
++t}