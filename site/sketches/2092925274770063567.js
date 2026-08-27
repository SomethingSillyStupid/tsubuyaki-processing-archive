//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)
background(0,99,W,2)
L=(x,y,s,T=0,u=r(6))=>T>TAU?0:(stroke(abs(W*cos(t)),abs(W*sin(t)),9,99),
point((R=s*sin(T/u))*cos(U=T+u)+x,y-R*sin(U)),L(x,y,s,T+.01))
L(r(W),r(W),r(30))
++t}