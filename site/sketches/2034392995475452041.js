//#つぶやきProcessing #p5js
t=0,a=.9,b=-.6,c=2,d=.5,x=y=.1
draw=_=>{
createCanvas(W=(w=200)*2,W)
t++%9||(f=random(255))
for(i=0;i<2e4;i++)
[x,y]=[x*x-y*y+a*x+b*y,2*x*y+c*x+d*y],
point((X=x*150)*cos(T=t/w)-(Y=y*150)*sin(T)+w,X*sin(T)+Y*cos(T)+w),
stroke(f,i/W,W)
}