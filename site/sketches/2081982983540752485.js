//ガイスラー管 #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
background(0)
strokeWeight(18)
for(x=d=0;x<W;x++)
stroke(13/x*W+25*W/(W-x),D=r(t%W),99+D,70),
point(x,w+d+(d=r(-8,8)))
++t}