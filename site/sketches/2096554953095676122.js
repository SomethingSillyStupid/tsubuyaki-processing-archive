//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+noFill()
colorMode(HSB)
for(R=0;R<W;R++)
blendMode(r([ADD,EXCLUSION])),
stroke(r(360,),w,w),
circle(w,w,R)
++t}