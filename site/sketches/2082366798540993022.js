//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(12)
for(R=1;R<W;R+=8)
for(T=0;T<TAU;T+=3/R)
stroke(A=-11/(sin(R+t/33)/R*1e4+abs(R-89))*w*cos(t/4+T*17),110+A,2),
point(R*cos(T)+w,R*sin(T)+w)
++t}