//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+noFill()
a=[T=W*sin(t/71),S=t%W]
b=[W-S,T]
c=[W-T,W-S]
d=[S,W-T]
stroke(...[a,b,c,d][int(t/W)%4],T,80)
quad(...a,...b,...c,...d)
++t}