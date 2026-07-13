//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+strokeWeight(4)
t++%50||noFill(B=random(w))
for(x=0,D=14*cos(t/w);x<W;x++,stroke((x+y+B)%255,w,w,.2),bezier(...P))
for(y=0,P=[];y<W;y+=130)
P.push(x+50*sin(x/19+y/B+t/33),y+10*sin(y/13+t/w))
}