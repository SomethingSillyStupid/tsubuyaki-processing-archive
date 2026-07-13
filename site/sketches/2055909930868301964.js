//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(B=r(255),P=[[w,w]])
Q=P.reduce((R,[x,y])=>(stroke(B+(x*y)%85,w,w,.2),point(x,y),R+mag(x-w,y-w),0))/t+r(131)
P.push([Q*cos(T=r(TAU))+w,Q*sin(T)+w])
strokeWeight(Q/2)
t=++t%W
}