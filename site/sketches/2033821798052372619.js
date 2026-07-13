//WIP Peter de Jong Attractor in Action #つぶやきProcessing #p5js
t=0,x=y=.1
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(i=0;i<1e4;i++)[x,y]=[sin(2*y+t/w)-cos(-2.5*x+t/w),sin(1.5*x+t/w)-cos(-.3*y+t/w)],point(X=x*99+w,Y=y*150+320),stroke((X+Y+w*sin(t/91))%255,w,w)
t++}