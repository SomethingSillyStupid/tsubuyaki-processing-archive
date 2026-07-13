//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
f=x=>sin(t*2+x)+cos(x/7)
for(y=0;y<W;y+=23)
for(x=0,R=random();x<W;x+=.1)
strokeWeight(R*9),
point(X=x-19*f(F=R*y+x/7+t/3),y+13*f(F)),
stroke(F%255,w,w)
t++}