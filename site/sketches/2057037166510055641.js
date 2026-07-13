//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
textSize(273)
text('IRS',0,300)
fill(0)
circle(w,w,t)
t=++t%W}