//#つぶやきProcessing #p5js
t=0,w=200
draw=_=>{
(T=t++%w)||createCanvas(W=w*2,W)+colorMode(HSB)+noStroke(F=random(W))
C=(x,y,R,n)=>n<1?(fill(((x+y)*sin(R+T)+F)%255,w,w/n,.4),rect(x,y,4)):[0,1,2,3,4,5,6].map(i=>C(R*n*cos((I=(T-i)*F)+y)+x,R*n*sin(I+x)+y,R*T/W,n-1))
C(w,w,60,3)
}