//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)
for(s=0;s<W;s++)
for(x=0,M=r(50),T=r(),O=r(W);x<W;x++)
stroke(s%w+(y=sin((x-s*4+T)/w*TAU)*M+O),W-s%W,W-y),
point(x,y)
t++}