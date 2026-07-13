//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
strokeWeight(8)
for(R=1;R<W;R+=5)
for(T=0;T<TAU;T+=6/R)
stroke((R+w*asin(T%.8))%255,w,w),
point(min(Q=R*2.5,max(W-Q,R*cos(T)+mouseX)),min(Q,max(W-Q,R*sin(T)+mouseY)))
++t}