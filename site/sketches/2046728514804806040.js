//#つぶやきProcessing #p5js
t=0
draw=_=>{
frameRate(2)
r=random
t++||createCanvas(W=(w=200)*2,W)
B=_=>blendMode(r([BURN,EXCLUSION,ADD,MULTIPLY]))
F=_=>[r(W),r(W),r(W)]
B()
fill(U=t%2?F():U)
rect(50,50,250)
B()
fill(V=t%2?F():V)
rect(150,180,300)
}