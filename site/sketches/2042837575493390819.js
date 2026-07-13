//#つぶやきProcessing #p5js
t=0,x=y=a=b=C=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
M=t%2?(x=r(W),y=r(W),a=r(W-x),b=r(W-y),OVERLAY):DIFFERENCE
blendMode(M)
fill(r([[w,0,w,w],[w,w,0,w],[0,w,w,w]]))
rect(x,y,a,b)
++t}