//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+(P=[])
background('slateblue')
noFill()
P.push([r(W),r(W),t])
P.map(B=>(stroke(W,W,W,255-t),circle(B[0],B[1],B[2]+t)))
t=++t%W}