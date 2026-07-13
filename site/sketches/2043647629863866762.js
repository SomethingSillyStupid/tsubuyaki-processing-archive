//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)
background(W,W,27,3)
noStroke()
rectMode(CENTER)
C=[[W,0,0],[0,W,0],[0,0,W]]
translate(X=r(W),Y=r(W))
fill(C[int((X+Y)/33)%3].map(x=>x+r(-9,9)))
rect(0,0,R=r(30))
rotate(.8)
rect(0,0,R)
}