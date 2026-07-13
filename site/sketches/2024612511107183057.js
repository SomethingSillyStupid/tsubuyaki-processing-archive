//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke(R=w,T=.45,p=r(T),C=x=>R*cos(x)+w)
for(U=0,fill(((V=r(p)+t%w)),R=(R+=r(-2,1))<0?w:R,w);U<TAU;U+=T*3)
rect(C(O=U+V-p),C(O-1.6),9),rect(C(O=U-V+p),C(O-1.6),9)
}