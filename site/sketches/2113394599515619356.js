//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(8)
for(d of [100, 300])
fill(0),
circle(d,w,99),
fill(W),
ellipse(d+random(-3,3),230,60,33),
ellipse(d,190,89,60),
arc(d,100,80,40,3.5+(D=d-w)/W,6+D/W)
++t}