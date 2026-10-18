//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(3)+colorMode(HSB)
for(Q=0;Q<W;Q+=5)
for(T=0;T<TAU;T+=.01)
stroke(abs(P=Q*sin(T*Q/7)),w,w),
point((R=Q+P/7*sin((T+t/71)*TAU))*sin(U=T+t/31)+w,R*cos(U)+w)
++t}