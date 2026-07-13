//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill(F=random(30),P=[],C=T=>w*cos(T)+w)
P.push(C(t*F),C(t*F-1.6))
P.length>7?(bezier(...P),P.shift(),P.shift()):0
stroke(shuffle(P))
t=++t%w}