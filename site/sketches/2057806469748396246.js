//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=2*(w=200),W)+colorMode(HSB)
background(0,.01)
for(R=0;R<W;R+=10)
for(T=0;T<TAU;T+=.1)
stroke(R,w,w),
strokeWeight((D=w-R/9)/37),
point(D*cos(S=t/w+R)+R*cos(U=T*R)+w,D*sin(S)+R*sin(U)+w)
++t
}