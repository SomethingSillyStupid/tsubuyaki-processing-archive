//Homage to 瑛九 #つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
strokeWeight(8)
x=r(W),y=r(W),M=r(x+y)/300,Q=r(50)
for(T=0;T<TAU;T+=.1)
for(R=0;R<Q;R+=8)
stroke(A=M^R<Q*.5?r(40):r(180,255),Q*3,A*4),
point(R*cos(T)+x,R*sin(T)+y)
}