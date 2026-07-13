//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(9)+colorMode(HSB)
for(R=0;R<w;R+=9)
for(T=0;T<TAU;T+=.005)
[X,Y]=[cos((x=R*cos(T)+w)*(S=log(t/41)))*9+(y=R*sin(T)+w)-x,y+x-sin(y*S)*9],
stroke(((X*Y)*cos(R+S))%255,w,w,.7),
point(X+w,Y-w)
++t}