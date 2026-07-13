//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+noFill(A=[])
C=(r,t)=>r*cos(t)+w
stroke(Q=C(W,t/w)%255,((T=t%w)+Q)%255,T*Q)
A.push(C(T,U=T+Q*7+t*13),C(T,U+1.6))
A.length>7?(curve(...A),A.shift(),A.shift()):0
}