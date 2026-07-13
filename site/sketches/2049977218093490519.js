//#つぶやきProcessing #p5js
t=0
draw=_=>{c=cos,s=sin
createCanvas(W=(w=200)*2,W)
strokeWeight(.3)
for(R=1;R<w;R+=20)
for(T=0;T<TAU;T+=22/R)
fill(w*c(T+t/w),W*s(R+t/w),w*c(R*T)),
triangle((x=R*c(T)+w)-(Q=dist(x,y=R*s(T)+w,99*c(U=T+t/w)+w,99*s(U)+w))/2,y,x,y+Q/2,x,y-Q/2)
++t}