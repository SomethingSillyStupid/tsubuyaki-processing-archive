//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)
background(0,99,w,1)
L=(x,y,s,u=r(6))=>{for(T=0;T<TAU;T+=.01)
stroke(abs(W*cos(t)),abs(W*sin(t)),9,99),
point((R=s+s/5*tan(T*u))*cos(U=T+u)+x,y-R*sin(U))}
L(r(W),r(W),r(30))
++t}