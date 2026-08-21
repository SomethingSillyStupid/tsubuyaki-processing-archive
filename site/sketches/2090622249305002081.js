//#つぶやきProcessing #p5js
t=0,W=(w=200)*2
draw=_=>{
r=random
t++%W||createCanvas(W,W)
blendMode(r([EXCLUSION,MULTIPLY]))
push()
rotate(TAU/8*int(r(8)))
fill(r(['aqua','pink','gold']))
t%W<w?r([rect,ellipse])(r(W),r(W),r(W),r(99)):t%W==w?filter(INVERT):0
pop()
}