//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()+rectMode(CENTER)
translate((R=w+6*cos(t/73))*cos(t/17)+w,R*sin(t/17)+w)
rotate(T=t*7)
stroke(200+5*tan(t),w,w)
rect(0,0,w)
}