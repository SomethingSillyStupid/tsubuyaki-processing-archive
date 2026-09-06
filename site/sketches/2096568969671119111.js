//#つぶやきProcessing #p5js
t=0
draw=_=>{
frameRate(9)
r=random
t||createCanvas(W=(w=200)*2,W)+noStroke()
colorMode(HSB)
blendMode(r([ADD,EXCLUSION]))
fill(A=r(360),w,w)
circle(w,w,w)
fill(360-A,w,w)
push()
translate(r(w),r(w))
rotate(r(TAU))
rect(0,0,A=r(w),A+r(W))
pop()
++t}