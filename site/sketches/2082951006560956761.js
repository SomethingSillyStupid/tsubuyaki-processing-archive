//#つぶやきProcessing #p5js
t=0
draw=_=>{frameRate(1)
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill(N=random(W),P=[])
C=T=>i*cos(T)+w
for(i=0;i<W;P.shift(),i++)
P.push(X=C(U=i/N*TAU),C(U*i)),
stroke(C(X+U)%360,w,w),
i>5?bezier(...P):0
}