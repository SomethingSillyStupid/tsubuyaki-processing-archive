//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+(P=[])
background(9,W*sin(t/23))
C=(R,x,y)=>{for(p=0;p<TAU;p+=.1)rect((q=r(R))*cos(p)+x,q*sin(p)+y+t,r(8)),fill(R,W/q,t*p)}
t<9?P.push([r(w),r(W),r(W)]):0
https://t.co/zuB9SSxcnY(x=>C(...x))
t=++t%W}