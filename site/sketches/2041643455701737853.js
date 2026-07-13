//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill(I=random([0,1,2]))
a=[T=t*sin(t)+w,S=t*cos(t)+w]
b=[W-S,T]
c=[W-T,W-S]
d=[S,W-T]
stroke(...[a,b,c,d][int(t/W)%4],w,.6)
;[bezier,quad,curve][I%3](...a,...b,...c,...d)
t=++t%w}