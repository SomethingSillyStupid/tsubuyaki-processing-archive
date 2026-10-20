//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
noStroke()
push()
translate(r(W),r(W))
rotate(r(TAU))
fill(R=(t/2-t/5*sin(t*TAU/1e3)),600-R,9)
triangle(0,0,17,13,23,-19)
pop()
t=++t%1e3}