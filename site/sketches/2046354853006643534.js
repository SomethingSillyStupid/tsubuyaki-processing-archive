//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+strokeWeight(8)+background(0)
t||(G=int(r(3)))
for(R=1;R<W;R+=6)
for(T=t;T<t+(Q=log(R+t/W)*11);T++)
stroke(Q<T?[R,W-T*5,U=T+Q].map((x,i,a)=>a[(i+G)%3]):U=0),
point(U*cos(Q)+w,U*sin(Q)+w)
t=++t%w}