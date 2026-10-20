//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(T=i=0;T<TAU;T+=TAU/200,i++)
point(A=w*sin(U=T+t/w)+w,B=50*cos(U)+50),
point(C=w*sin(U=T-t/W)+w,D=50*cos(U)+350),
stroke(((i+t+A)*360/200)%360,w,w),
line(A,B,C,D)
++t}