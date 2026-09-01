//#つぶやきProcessing #p5js
t=0,C=[]
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)
rectMode(CENTER)
for(R=0;R<W;R+=19)for(T=0;T<TAU;T+=.3)!C[R]?C[R]=[]:0,
fill(!C[R][T]?C[R][T]=[r(w),r(w),r(W)]:C[R][T]),
rect((Q=R/2+20*cos((T+t)/71))*cos(U=T*R+t/w)+w,Q*sin(U)+w,Q/5*sin(U*T))
++t}