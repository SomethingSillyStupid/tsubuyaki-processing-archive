//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(P=[])
P.push([r(W),r(W)])
https://t.co/zuB9SSxcnY(B=>{for(i=0,x=B[0],y=B[1],R=mag(x,y)/(t%2*2-1);i<t;i++)B[0]+=(P[i][0]-x)/R,B[1]+=(P[i][1]-y)/R;stroke(R-y,w,w),point(x,y)})
t=++t%W}