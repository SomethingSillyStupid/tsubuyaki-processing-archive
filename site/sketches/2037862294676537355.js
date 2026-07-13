//TACOサイクル #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(x=0;x<W;x+=.01)
stroke(x,w,w),
point(x,w*sin(x/sqrt(W-x)/.8-t)+w)
++t}