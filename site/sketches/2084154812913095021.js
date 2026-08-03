//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
noStroke()
fill(w)
circle(110,w,w)
circle(290,w,w)
rect(100,100,w)
strokeWeight(30)
stroke(9)
for(i=0;i<3;i++)
point(i*80+130,w-(40+i*2)*max(0,sin(t/11-i)))
t++}