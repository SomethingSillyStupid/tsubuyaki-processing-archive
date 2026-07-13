//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+strokeWeight(8)+print(d=random(1,30))
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
point(x+(X=d*Math.sinh(cos(y+t/d))),y+(Y=2*d*Math.cosh(sin(x-t/d)))-2*d).
stroke((log(X*Y)*x/3)%360,w,w)
t=++t%w}