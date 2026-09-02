//Magic Eye Tube #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
blendMode(BLEND)
fill(0)
circle(w,w,w)
blendMode(ADD)
fill(0,w+(D=random(-9,9)),0)
arc(w,w,w,w,T=-PI/4*t/w,-T)
arc(w,w,w,w,PI+T,PI-T)
t=++t>W?(W+50+19*sin(t)):t}