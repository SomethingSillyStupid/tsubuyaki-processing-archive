//#つぶやきProcessing #p5js
t=0,x=y=.1
draw=_=>{
createCanvas(W=(w=200)*2,W)
t||colorMode(HSB)+(A=2,B=-.2,C=-1.75,D=1)
for(i=0;i<1e5;i++)
K=A*((X=x*x)+(Y=y*y))+B*x*(X-3*y*y)+C,
[x,y]=[K*x+D*(X-Y),K*y-2*D*x*y],
stroke(abs(K*t*w)%360,w,w),
point(x*260+w,y*260+w)
++t}