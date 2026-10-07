//#つぶやきProcessing #p5js
t=150,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(x-w,y-w),
stroke(abs(sin((M&x^M&y)<<t/71))*M,w,w),
point(x,y)
++t}