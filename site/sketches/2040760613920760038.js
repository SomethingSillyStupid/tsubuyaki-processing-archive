//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)+noStroke(N=random(3))
p=x=>(x<0?-1:1)*abs(x)**N
fill((M=t%4)==3?'cyan':M==1?'magenta':w)
rect(t*p(cos(t))+w,t*p(sin(t))+w,t/4)
t=++t%w}