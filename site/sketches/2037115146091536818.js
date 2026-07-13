//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
S=(r,t)=>r*Math.tanh(t-2)+w
for(r=0;r<W;r+=49)
for(u=0;u<TAU;u+=.1)
[R,U]=[(T=t/6)*exp(-r)+r, u-T/r],
stroke(Y=S(R,U-1.6),X=S(R,U),X-Y),
line(S(r,u),S(r,u-2),Y,X)
++t}