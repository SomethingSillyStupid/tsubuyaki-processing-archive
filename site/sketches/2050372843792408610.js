//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)
P=u=>(T=i+u%W*4)<W?[W,T]:T<W*2?[W*2-T,W]:T<(U=W*3)?[0,U-T]:[T-U,0]
L=(X,Y)=>line(...X,...Y)
M=n=>(t+n)%W
for(i=0;i<w;i+=3)
for(j=0;j<=5;j++)
L(P(A=M(J=j*80)),P(M(J+217))),
stroke(A%255,w,w)
++t}