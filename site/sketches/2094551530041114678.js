//#つぶやきProcessing #p5js
t=0,C=[]
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)
for(R=0;R<W;R+=19)
for(T=0;T<TAU;T+=.3)
!C[R]?C[R]=[]:0,
fill(!C[R][T]?C[R][T]=[r(w),r(w),r(W)]:C[R][T]),
rect((Q=R*cos(t/w))*cos(U=R+(int(t-R)%2?T:-T)*t/R)+w,Q*sin(U)+w,19)
++t}