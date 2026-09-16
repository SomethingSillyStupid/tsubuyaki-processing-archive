//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(8)
for(R=0;R<w;R+=6)for(T=0;T<TAU;T+=.1)
stroke(R,w,W),
point((Q=w*sin(log(R)%9*sin(t/w))%R)*sin(U=log(R)*T)+w,Q*cos(U)+w)
++t}