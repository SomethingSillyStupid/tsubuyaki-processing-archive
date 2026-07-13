//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)
background(0)
for(x=0;x<W;x+=d)
for(y=q=0,p=x;y<W;y+=d)
strokeWeight(random(2)),
stroke(w+(D=d*cos(p*q+t/w)),W-D,w*tan(t/w)),
line(p,q,p=x+sin(y*d+t/W)*d,q=sin(x*d+t/W)*W-y)
t=(t+=d)%W}