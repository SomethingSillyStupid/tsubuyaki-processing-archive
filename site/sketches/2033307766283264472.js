//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
C=(x,y,R,i,n)=>n>0?(stroke((R*i)%255,w,w),strokeWeight(n/9),point(X=R*cos(T=i+n*t/W)+x,Y=R*sin(T)+y),C(x,y,R*.991,i+1,n-1)):0
C(w,w,w,W,w)
++t}