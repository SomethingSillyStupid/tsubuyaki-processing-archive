//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+noStroke(P=[])
background(0)
P.push([r(9),r(W),r(W)])
https://t.co/zuB9SSxcnY(([R,x,y])=>{for(p=0;p<TAU;p+=.1)rect(R*cos(p)**3+x,R*sin(p)**3+y*sin(t/w),4),fill(r(y),r(x),r(p*y))})
t=++t%W}