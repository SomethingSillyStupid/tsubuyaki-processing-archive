//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noStroke()
for(T=0;T<TAU;T+=.01)
for(R=0;R<w;R++)
abs(R*R-3e4/cos(U=R+tan(t/w)*T))<w?(fill(X=R*cos(U+T)+w,W,W),rect(X,R*sin(U)+w,T*8)):0
t++}