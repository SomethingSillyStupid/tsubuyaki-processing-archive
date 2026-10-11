//#つぶやきProcessing #p5js
t=0,x=y=.1
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(A=1.9,B=1,C=-2.34,D=-.7)
strokeWeight(4)
background(0)
for(i=0;i<1e5;i++)
K=A*((X=x*x)+(Y=y*y))+B*x*(X-3*Y)+C,
[x,y]=[K*x+D*(X-Y),K*y-2*D*x*y],
stroke(-K*w,X*w,Y*w),
point(x*w+w,y*w+w)
++t}