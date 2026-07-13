//おはようございます。Tokyo this morning #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
for(x=0;x<W;x++)
for(y=0;y<W;y++)
strokeWeight(r()),
stroke(w,w,r(w,W)),
rect(r(W),r(W),r(30)*sin(t))
++t}