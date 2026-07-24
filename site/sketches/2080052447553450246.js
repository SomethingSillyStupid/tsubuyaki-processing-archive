//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(C=random(-9,9))
colorMode(HSB)
strokeWeight(4)
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)stroke(abs(sin(M=mag(x-w,y-w)-t/C)/M*W*79)%360,W,W),point(x,y)
t=++t%30}