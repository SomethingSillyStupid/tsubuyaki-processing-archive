// #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+noStroke(s=sin,c=cos)+colorMode(HSB)
translate(w,w)
for(T=0;T<TAU;T+=.08)
D=c(U=T+t/91),
fill(190+30*s(U),D*w,w,.4),
quad(w*c(T),w*s(T),w*c(U=T+D),w*s(U),w*c(U+=6*D),w*s(U),w*c(U-=D),w*s(U))
t++}