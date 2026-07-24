//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(C=random(-9,9)*W)
colorMode(HSB,1)
strokeWeight(4)
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)stroke(abs(sin((C*C*x*x-C*y*y+t/w))),1,1),point(x,y)
t=++t%99}