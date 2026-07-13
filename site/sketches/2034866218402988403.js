//#つぶやきProcessing #p5js
t=0
draw=_=>{t++%29||createCanvas(W=(w=200)*2,W)+(x=y=.1)
P=_=>(("YOATKFMFJHIM".charCodeAt(I++))-65)*.1-1.2
N=_=>[1-t%w/W,x,x*x,x*y,y,y*y].reduce((a,c)=>a+c*P(),0)
for(i=0;i<1e4;i++)[x,y]=[N(I=0),N()],point(X=x*w+130,Y=120-y*w),stroke((t+i)%255,X,Y)}