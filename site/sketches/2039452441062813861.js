//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+(P=[])
background(9,9,w,3)
P.push([r(W),r(W)])
https://t.co/zuB9SSxcnY(B=>{for(i=0,x=B[0],y=B[1],R=mag(x,y);i<t;i++)B[0]-=(P[i][0]-x)%w/R,B[1]-=(P[i][1]-y)%w/R,stroke(i+t,R,w),point(...B)})
t=++t%w}