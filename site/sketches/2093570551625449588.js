//#つぶやきProcessing #p5js
t=0,C=[]
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+noStroke()
background(0,5)
for(T=0;T<TAU;T+=.1)
fill(!C[T]?C[T]=[r(w),r(w),r(w)]:C[T]),
circle((R=4*sin(T*t/51)+60*sin(t/31)+130)*cos(U=T+R/41)+w,R*sin(U)+w,R/6)
}