//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
blendMode(r([ADD,MULTIPLY]))
noStroke(T=PI/7,p=r(T),C=x=>R*cos(x)+w)
for(U=0,fill(((V=r(T*t))+t)%W,R=r(t%w),w);U<TAU;U+=T*2)
rect(C(O=U+V-p),C(O-1.6),9),rect(C(O=U-V+p),C(O-1.6),9)
}