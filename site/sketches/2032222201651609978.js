//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke(D=random())
C=(x,y,R,n)=>n<1?(fill(((F=R/(n+1)*D)*cos(x*y)+D*W)%255,w,w),rect(x,y,F/2)):
[0,2,4,6].map(i=>C((Q=R*n*D)*cos(U=t+i)+x,Q*sin(U)+y,Q,n-1))
C(w,w,50,4)
t=++t%30}