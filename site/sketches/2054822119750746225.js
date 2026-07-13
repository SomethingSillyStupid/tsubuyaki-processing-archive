//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()+rectMode(CENTER)
translate((R=W+50*cos(t/13))*cos(t/17)+w,R*sin(t/17)+w)
rotate(T=t/31)
stroke(180+40*abs(sin(R+T)),R,90)
rect(0,0,W)
}