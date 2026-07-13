//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)
background(0,t)
P.push([r(W),r(W)])
https://t.co/zuB9SSxcnY(([x,y])=>(rect(X=x+w*cos(p=atan2(y-w,x-w)-t/71),Y=y+w*sin(p),r(19)),fill(t-X,X+Y,Y-t,w)))
++t>W?P.shift():0}