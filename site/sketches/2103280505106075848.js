// #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)+noStroke(L=['#730053',99],F=['#e7ffe7',w])
blendMode(DIFFERENCE)
;[C,D]=r([L,L,F,L])
push()
translate(r(W),r(W))
rotate(r(TAU))
fill(C)
triangle(-D,0,D,0,0,-D)
pop()}