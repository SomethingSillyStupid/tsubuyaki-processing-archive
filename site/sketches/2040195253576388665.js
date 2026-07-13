//#つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill(t=9)
C=i=>[(Q=R+(i*(T=6/t))%30)*cos(U=Q+i/T)+w,Q*sin(U)+w]
for(R=1;R<w;R+=17)for(i=0;i<8;i++)stroke(...C(i),w,w),[curve,bezier][int(t)%2](...C(-i-1),...C(-i),...C(i),...C(i+1))
t+=.01}