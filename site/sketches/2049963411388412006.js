//#つぶやきProcessing #p5js
t=0
draw=_=>{c=cos,s=sin
rectMode(CENTER)
createCanvas(W=(w=200)*2,W)
for(R=1;R<w;R+=20)for(T=0;T<TAU;T+=Q/R)fill(w*c(T*t/w),W*s(R+t/w),w*c(R*T)),push(),translate(x=R*c(T)+w,y=R*s(T)+w),rotate(R+T+t/w),rect(0,0,Q=dist(x,y,w*c(T)+w,w*s(T)+w)),pop()
++t}