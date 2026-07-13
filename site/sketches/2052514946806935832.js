//#つぶやきProcessing #p5js
t=0,w=200
draw=_=>{r=random
t++%w||createCanvas(W=w*2,W)+colorMode(HSB)+(B=r(255),N=r(9))
for(T=0,M=1/N;T<7;T+=.1)R=((abs(X=w*cos(T))**M+abs(Y=w*sin(T))**M)**N),stroke(((R/N*T)%90+B)%255,w,w,.3),strokeWeight(R/w),point(X*cos(U=T+t/N+R/w)+w,Y*sin(U)+w)}