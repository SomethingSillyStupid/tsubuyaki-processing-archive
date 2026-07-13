//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=2*(w=200),W)+colorMode(HSB)
background(0,.01)
for(R=0;R<W;R+=10)
for(T=0;T<TAU;T+=.05)
stroke(R,R,R),
strokeWeight((D=R/2)/37),
point((R+D*cos(S=R+T+t/w))*cos(U=T*R)+w,(R+D*sin(S))*sin(U)+w)
++t
}