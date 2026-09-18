//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(R=1;R<w;R+=5)for(T=0;T<TAU;T+=19/R)
stroke(360-R,w,W),
strokeWeight(9),
point((Q=37*log(abs(R*sin(t/w))))*sin(U=sin((Q+t)/31)-T)+w,Q*cos(U)+w)
++t}