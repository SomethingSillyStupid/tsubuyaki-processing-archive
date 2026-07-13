//#つぶやきProcessing #p5js
t=0
draw=_=>{r=_=>random(-3,3)
t++%99||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+background((x=y=.1,a=r(),b=r(),c=r(),d=r()))
for(i=0,T=t/w;i<1e4;i++)[x,y]=[cos(b*y+T)+c*sin(b*x+T),cos(a*x+T)+d*sin(a*y+T)],point(x*99+w,y*99+w),stroke((t*x*y)%255,W,W)}