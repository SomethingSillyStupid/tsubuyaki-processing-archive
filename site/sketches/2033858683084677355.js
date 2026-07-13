//#つぶやきProcessing #p5js
t=0
draw=_=>{r=_=>random(-3,3)
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t++%99||(a=r(),b=r(),c=r(),d=r(),x=y=.1)
for(i=0,T=t/w;i<5e4;i++)[x,y]=[sin(a*y+T)-cos(b*x+T),sin(c*x+T)-cos(d*y+T)],point(x*99+w,y*150+320),stroke((W*sin(T+x*y))%255,w,w)
}