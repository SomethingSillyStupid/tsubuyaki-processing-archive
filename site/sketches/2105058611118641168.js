//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
fill(W)
circle(w,w,W)
fill('blue')
arc(w,w,W,W,-PI/2,PI/2-noise(t/4)/9)
textSize(80)
fill(0)
textAlign(CENTER)
text('FY2026',w,w)
++t}