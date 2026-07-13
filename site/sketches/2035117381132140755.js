//#つぶやきProcessing #p5js
t=0,d=3
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t++%9||(A=random(E=255),B=(A+127)%E)
D=(s,c,p)=>(stroke(c,W,W),rect(R*cos(U=R*sin(t/s+p)+T)+w,R*sin(U)+w,d))
for(R=1;R<w;R+=d)for(T=0;T<TAU;T+=d/R)D(A,B,0),
D(-B,A,1.6)}