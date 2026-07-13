//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+noFill()
a=[T=(t%W)*sin(t/71),0]
b=[W,T]
c=[W-T,W]
d=[0,W-T]
stroke(...[a,b,c,d][int(t/W)%4],T,80)
quad(...a,...b,...c,...d)
++t}