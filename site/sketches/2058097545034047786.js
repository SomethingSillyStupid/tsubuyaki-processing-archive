//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=2*(w=200),W)+colorMode(HSB)
background(0,.01)
for(R=0;R<w;R+=10)
for(T=0;T<TAU;T+=.1)
strokeWeight((D=R/3*sin(t/45))/7),
point((R+D*cos(S=R+T+t/w))*cos(U=T*2-S)+w,(R+D*sin(S))*sin(U)+w),
stroke(R,S%255,U+255)
++t
}