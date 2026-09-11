//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noFill()
for(D=0;D<PI;D+=.6)
for(T=0;T<TAU;T+=.03)
stroke(240+49*sin((U=T+D)*t/16),w,w,.3),
circle(150*cos(T+cos(t/w)*D)+w,150*sin(T-sin(t/w)*D)+w,60*sin(T*PI+t/w))
++t}