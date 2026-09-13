//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
noStroke()
push()
translate(r(W),r(W))
rotate(r(TAU))
fill(r()<.1?'deeppink':r()<.3?'green':'lime')
triangle(0,0,17,13,23,-19)
pop()
++t}