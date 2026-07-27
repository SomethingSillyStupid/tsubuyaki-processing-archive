//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=randomGaussian
t||createCanvas(W=(w=200)*2,W)+(B=r(-1,.2),C=r(.5,.3))
background(20,.01)
strokeWeight(8)
colorMode(HSB)
for(i=0,x=r(0),y=B*x;i<W*9;i++)
stroke(abs(i+t)%360,W,W),
u=x,
point((x=1+y-C*abs(x))*99+150,(y=B*u)*99+w)
t=++t%W}