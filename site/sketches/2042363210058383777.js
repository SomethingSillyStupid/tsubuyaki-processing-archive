//WIP #つぶやきProcessing #p5js
t=0,x=y=a=b=C=0
draw=_=>{
frameRate(3)
r=random
t||createCanvas(W=(w=200)*2,W)
M=t%2?(x=r(w),y=r(w),a=r(W),b=r(W),C=color(r(255),r(255),r(255)),OVERLAY):DIFFERENCE
blendMode(M)
fill(C)
rect(x,y,a,b)
++t}