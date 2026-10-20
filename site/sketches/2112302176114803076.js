//#つぶやきProcessing #p5js
t=0,a=2
draw=_=>{Q=TAU
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(T=-Q,beginShape();T<Q;T+=.01)
vertex((R=w*exp(-abs(T)))*cos(U=T+t/a*Q)+w,R*sin(U)+w)
fill(abs(t*a)%360,w,w,.3)
endShape()
;[t,a]=++t/a>2?[0,(a+log(a))%50]:[t,a]}