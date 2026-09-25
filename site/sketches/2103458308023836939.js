// #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)+noStroke(L=['#734053',99],M=['#736053',44],F=['#ff90ff',20],G=['#20aa46',10])
;[C,D]=r([F,L,M,F,F,G])
push()
translate(r(W),r(W))
rotate(r(TAU))
fill(C)
triangle(-D,0,D,0,0,-D)
pop()}