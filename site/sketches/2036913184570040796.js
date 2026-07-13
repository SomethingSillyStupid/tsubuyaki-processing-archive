//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
S=(r,t)=>r/sin(t)+w
for(r=0;r<w;r+=49)
for(u=0;u<TAU;u+=.1)
[R,U]=[(T=t/6)*exp(-r)+r, u-T/r],
stroke(X=S(R,U),Y=S(R,U-1.6),abs(X-Y),X+Y),
line(S(r,u),S(r,u-1.6),Y,X)
++t}