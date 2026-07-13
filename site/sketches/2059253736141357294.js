//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
P.push([r(9),r(7)])
https://t.co/zuB9SSxcnY(B=>(R=B[0]+=r(-2,3),T=B[1]+=r(-2,3),stroke(abs(R-t)%255,T*w,W,.06),strokeWeight(T/12),point(R*cos(T)+w,R*sin(T)+w)))
++t>W?P.shift():0}