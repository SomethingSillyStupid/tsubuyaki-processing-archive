//#つぶやきProcessing #p5js
t=0,w=200
draw=_=>{
(T=t++%w)||createCanvas(W=w*2,W)+colorMode(HSB)+noStroke(F=random(w))
C=(x,y,R,n)=>n<1?(fill((W*sin(R)+F)%255,w,w,.6),rect(x,y,5)):[0,1,2,3,4,5,6].map(i=>C(R/n*cos(I=i+T*F)+x,R/n*sin(I)+y,R*T/W,n-1))
C(w,w,w,2)
}