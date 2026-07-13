//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(8)
P.push([(R=(t/3)%w)*cos(T=R*7+t*71)+w,R*sin(T)+w])
https://t.co/zuB9SSxcnY(B=>(M=mag(X=B[0]-w,Y=B[1]-w)*2,stroke(X,Y,M),point(B[0]+=X/M,B[1]+=Y/M),M>W?P.shift():0))
++t}