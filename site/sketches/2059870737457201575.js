//朝方の夢に出てきたやつ #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(T=0;T<TAU;T+=.3)
abs(T%3*sin(t/71)-.3)<1?quad(A=w*cos(T)+w,(B=w*sin(T))+w,C=w*cos(T+.1)+w,(D=w*sin(T+.1))+w,C,w-D,A,w-B):0,
fill(abs(A*B)%255,w,w)
++t}