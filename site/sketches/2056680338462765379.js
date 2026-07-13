//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t||(B=random(800))
strokeWeight(d)
for(y=0;y<W;y+=d)
for(x=0;x<W;x++)
stroke((B+150*sin(x/3)*tan(y/133))%255,w,w,.4),
point(x,y+d*sin(x*y+t/31))
t=++t%99}