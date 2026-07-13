//WIP同じような色を重ねる #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
for(i=0;i<50;i++)
stroke(180+r(-75,75),r(160),r(99,130),r(50)),
strokeWeight(r(40)),
line(X=r(W),Y=r(W),X,Y+=r(w))
++t}