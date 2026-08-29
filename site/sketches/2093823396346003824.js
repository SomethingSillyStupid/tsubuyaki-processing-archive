//#つぶやきProcessing #p5js
t=0,C=[]
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+noStroke()
for(T=0;T<TAU;T+=.1)
fill(!C[T]?C[T]=[r(w),r(w),r(w)]:C[T]),
circle((R=w*sin(T*t/71))*cos(U=T+sin(t/41))+w,R*sin(U)+w,R/6)
}