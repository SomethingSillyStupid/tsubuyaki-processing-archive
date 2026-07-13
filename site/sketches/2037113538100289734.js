//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t++%9||(F=random(9))
for(R=1;R<10;R+=.2)
for(T=0;T<TAU;T+=.2/R)
stroke(E=exp(R+F)%255,W,W),
strokeWeight(E%F),
point(R*20*cos(T)+w,R*20*sin(T)+w)
}