//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
strokeWeight(d)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke((W*sin((mouseX-x)**3/W/W)*cos((mouseY-y)**3/W/W))%255,w,w),
point(x,y)
++t}