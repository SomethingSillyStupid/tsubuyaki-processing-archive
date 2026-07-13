//#つぶやきProcessing #p5js
t=0,d=18
draw=_=>{
r=random,c=cos,s=sin
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(F=r(w),C=T=>r(d)*cos(y*F+T))
for(y=0,T=W*sin(t);y<W;y+=d)
stroke(r(W)%255,r(F*T),w,.2),
strokeWeight(r(30)),
line(T-C(T),y+C(-T+1.6),T+C(T),y+C(-T-1.6))
t=++t%W}