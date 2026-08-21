//#つぶやきProcessing #p5js
t=0,W=(w=200)*2
draw=_=>{
r=random
t++%W||createCanvas(W,W)
colorMode(HSB)
blendMode(DIFFERENCE)
push()
rotate(TAU/8*int(r(8)))
fill(r(360),w,w,.8)
t%W<99?rect(r(W),r(W),r(W),r(99)):0
pop()
}