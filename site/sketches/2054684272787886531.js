//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()+rectMode(CENTER)
translate(x=(R=w+30*cos(t/3))*cos(t/17)+w,y=R*sin(t/17)+w)
rotate(T=t/31)
stroke((R+T)%255,(x+y)/2,w)
rect(0,0,49)
}