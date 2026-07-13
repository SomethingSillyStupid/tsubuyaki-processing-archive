//#つぶやきProcessing #p5js
t=0,P=[],d=16
draw=_=>
{r=random
t||createCanvas(W=(w=200)*2,W)
background(9)
P.push([0,r(d)])
https://t.co/zuB9SSxcnY(B=>(R=B[0]+=r(-d,d),T=B[1]+=r(r([-.01,-.1]),.1),strokeWeight(r(d)),stroke(9,R*99,T*99),point(R*cos(T)+w,R*sin(T)+w)))
++t}