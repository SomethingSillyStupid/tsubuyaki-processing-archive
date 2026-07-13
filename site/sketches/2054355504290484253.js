//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill()+rectMode(CENTER)
translate(x=W*cos(t/7)+w,y=W*sin(t/7)+w)
rotate(t/71)
blendMode([BURN,DODGE][int(S=abs(x+y+t))%2])
stroke(S%255,w,w,99)
rect(0,0,W)
}