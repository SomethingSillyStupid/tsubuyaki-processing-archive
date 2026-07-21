//#つぶやきProcessing #p5js
t=0,D=20
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB,100)
strokeWeight(4)
for(x=0;x<W;x+=4)
stroke((x/W*100-D)%100,W,W),
line(x,0,x,W)
++t}