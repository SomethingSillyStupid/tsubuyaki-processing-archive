//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke(D=r(9))
C=(x,y,R,n)=>n<1?(fill(((R+t)*D)%255,w,w),rect(x,y,4)):[0,1,2,3,4,5,6].map(i=>C((R+t)*cos(I=i+t/R)+x,(R+t)*sin(I)+y,R/D,n-1))
C(w,w,99,2)
t=++t%w}