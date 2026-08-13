//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+(O=r(320))
background(0,1)
colorMode(HSB)
translate(w,w)
rotate(t/71)
for(x=-w;x<w;x+=30)
for(y=-w;y<w;y+=30)
fill(r(80)+O,W,W),
circle(x+r(-(D=30*cos(t/37)),D),y+r(-D,D),30)
t=++t%w}