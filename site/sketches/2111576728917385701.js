//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
P=(x,y,n,N,Y,d=19)=>n>1?(stroke(((d-n*cos((y/n+t)/9))*18)%360,w,w),strokeWeight(n),point(x,y),P(x,Y=y-r(2*d),N=n-1),P(x+r(min(-w,x-w)/(D=99/d/y*w),max(w,x-w)/D),Y,N)):0
P(w,W,19)
++t}