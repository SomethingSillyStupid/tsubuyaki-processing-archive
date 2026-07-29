//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill(A=TAU,N=r(19))
for(i=t,beginShape();i<N+t;i++)
stroke(abs(W*cos(t*i/71))%360,w,w),
vertex((R=t+r(-1,1))*cos((U=i/N*A)+r(T=A/N))+w,R*sin(U+r(T))+w)
endShape()
t=(t+=.3)>w?0:t}