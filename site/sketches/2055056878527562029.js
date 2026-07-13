//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()+rectMode(CENTER)
translate(w,w)
scale(cos(t/w))
rotate(T=t*7)
stroke((220*tan(t))%255,w,w)
rect((R=W+6*cos(t/73))*cos(t/17),R*sin(t/17),W)
}