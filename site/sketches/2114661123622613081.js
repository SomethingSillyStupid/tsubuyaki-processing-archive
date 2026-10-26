//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
for(T=0;T<TAU;T+=PI/57)
fill(abs(360*tan(T*66+t/71)),w,w,.4),
arc(w*cos(U=T+t/w)+w,w*sin(U)+w,w,w,T-PI/6,T+PI/6)
++t
}