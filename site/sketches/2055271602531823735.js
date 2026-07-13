// #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+noStroke(s=sin,c=cos)+colorMode(HSB)
translate(w,w)
for(T=0;T<TAU;T+=.1)
fill(abs(600*c(U=T-t/w))%255,w,w,.4),
D=cos(T),
bezier(w*c(T),w*s(T),w*c(U=T+D),w*s(U),w*c(U+=6*D),w*s(U),w*c(U-=D),w*s(U))
t++}