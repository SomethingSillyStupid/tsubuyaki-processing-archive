//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
P.push([r(W),r(W),r(50),r(W)])
P.map(B=>{for(i=0;i<9;i++)stroke(B[3],w,w,.3),strokeWeight((R=B[2])*2),point(R*cos(T=i/1.4)+B[0],R*sin(T)+(B[1]+=r(-.3,.4)))})
++t}