//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+(O=r(320))
noStroke()
background(0,1)
colorMode(HSB)
for(x=0;x<W;x+=80)
for(y=0;y<W;y+=80)
for(i=0;i<4;i++)
fill(r(80)+O,W,W,.4),
circle(x+(i%2)*20+30,y+int(i/2)*20+30,30)
t=++t%w}