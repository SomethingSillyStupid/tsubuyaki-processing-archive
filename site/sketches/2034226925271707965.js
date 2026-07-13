//#つぶやきProcessing #p5js
t=0
draw=_=>{r=_=>random(9)
t++%9||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(a=r(),b=r(),c=r(),x=y=120)
for(i=0,T=t/w;i<3e4;i++)[x,y]=[y-sqrt(abs(b*x-c))*Math.sign(x-1),a-x],point(x*cos(U=t/17)-y*sin(U)+w,x*sin(U)+y*cos(U)+w),stroke((i/w*U)%255,w,w)}