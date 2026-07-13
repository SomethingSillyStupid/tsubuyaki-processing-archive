//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++%400||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(B=r(255),P=[[w,w]])
Q=P.reduce((R,[x,y])=>R+mag(x-w,y-w),0)/P.length+r(37)
P.push([X=Q*cos(T=r(TAU))+w,Y=Q*sin(T)+w])
strokeWeight(Q/4)
stroke(B+(X*Y)%85,w,w,.5)
point(X,Y)
}