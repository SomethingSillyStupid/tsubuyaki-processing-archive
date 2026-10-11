//#つぶやきProcessing #p5js
t=0,x=y=.1
draw=_=>{
createCanvas(W=(w=200)*2,W)
t||colorMode(HSB)+(A=-1,B=.1,C=1.59,D=-.8)
strokeWeight(2)
for(i=0;i<1e5;i++)
K=A*((X=x*x)+(Y=y*y))+B*x*(X-3*Y)+C,
[x,y]=[K*x+D*(X-Y),K*y-2*D*x*y],
stroke(abs(K*t*w)%360,w,w),
point(x*150+w,y*150+w)
++t}