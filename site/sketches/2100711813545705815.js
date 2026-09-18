//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(R=1;R<w;R+=5)for(T=0;T<TAU;T+=10/R)
stroke(R,w,W,.01),
strokeWeight(131),
point((Q=R/5*log(abs(R+R/3*sin(T*R-t/W))))*sin(U=sin(Q+t/w)-T)+w,Q*cos(U)+w)
++t}