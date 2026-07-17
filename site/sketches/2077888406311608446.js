//#つぶやきProcessing #p5js
t=0,P=[[200,200]]
draw=_=>{createCanvas(W=(w=300)*2,W)
fill('red')
for(i=0,d=-1;i<P.length;i++)d<(M=mag(P[i][0]-w,P[i][1]-w))?d=M%w:0
P.push([(d-1)*cos(T=random(TAU))+w,(d+1)*sin(T)+w])
https://t.co/zuB9SSxcnY(B=>circle(...B,10))
t>900?P.shift():0
++t}