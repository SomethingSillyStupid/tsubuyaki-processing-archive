//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
translate(w,w)
for(R=1;R<w;R+=16)
for(T=0;T<TAU;T+=.157)
triangle(X=R*cos(T),Y=R*sin(T),(Q=R-16)*cos(T),Q*sin(T),R*cos(U=T+.157),R*sin(U)),
fill(['cyan','orange','lime'][int(abs(t/R+T))%3])
++t}