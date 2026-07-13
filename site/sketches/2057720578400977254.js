//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
s=x=>!x?1:abs(sin(x)/x)
strokeWeight(d)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke((W*W*3*s((mouseX-x)/w)*s((mouseY-y)/w))%255,w,w),
point(x,y)
++t}