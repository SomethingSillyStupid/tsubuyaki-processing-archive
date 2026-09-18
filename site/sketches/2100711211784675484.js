//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(R=1;R<w;R+=5)for(T=0;T<TAU;T+=30/R)
stroke(R,w,W),
strokeWeight(13),
point((Q=R*6/log(abs(R+R/3*sin(t/W))))*sin(U=sin(Q+t/w)-T)+w,Q*cos(U)+w)
++t}