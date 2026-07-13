//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
S=(r,t)=>r*cos(t)+w
for(r=0;r<w;r+=49)
for(u=0;u<TAU;u+=.1)
[R,U]=[(T=t/6)/log(r)+r, u-T/sqrt(r)],
stroke(X=S(R,U),Y=S(R,u-1.6),w,.7),
line(S(r,u),S(r,u-1.6),S(V=R+T,U),S(V,U+1.6))
++t}