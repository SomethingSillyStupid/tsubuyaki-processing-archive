//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
P=(x,y,n,N,Y,d=15)=>n>1?(stroke(R=(d-n*cos(t))*15,W-R,R/2),strokeWeight(8),point(x,y),P(x,Y=y-r(2*d),N=n-1),P(x+r(min(-w,x-w)/(D=w/d/y*w),max(w,x-w)/D),Y,N)):0
P(w,W,20)
++t}