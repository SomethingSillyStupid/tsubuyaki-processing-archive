//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
C=(x,y,R,i,n,X=0)=>n>0?(stroke((R*i-n-x-y)%255,w,w),strokeWeight(R),point((X+=R/3*cos(T=i/w*TAU+R+t/71))+x,(Y=R/3*sin(T))+y),C(X*cos(T)+x,Y*sin(-T)+y,R*.993,i+1,n-1)):0
C(80,320,99,W,W)
t++}