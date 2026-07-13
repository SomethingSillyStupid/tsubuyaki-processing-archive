//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+noFill()+colorMode(HSB)
a=[T=t%w*sin(t)+w,S=t%w*cos(t)+w]
b=[W-S,T]
c=[W-T,W-S]
d=[S,W-T]
stroke(...[a,b,c,d][int(t/W)%4],w,.2)
quad(...a,...b,...c,...d)
++t}