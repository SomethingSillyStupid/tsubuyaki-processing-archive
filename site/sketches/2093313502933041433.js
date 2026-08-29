//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(x=0;x<W;x++)
stroke(x/W*255),
line(x,0,x,W)
noStroke()
fill(89)
rect(t%W,100,50)
++t}