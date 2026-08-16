//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+background('orange')+noStroke(x=y=0)
blendMode(r([BLEND,ADD,MULTIPLY,OVERLAY,DIFFERENCE,LIGHTEST]))
fill(r(['blue','yellow','green']))
rect(x+=r(-2,5),y,100)
++t
y>W?(t=0):x>W?(x=0,y+=100):0
}