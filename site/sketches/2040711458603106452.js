//WIP同じような色を重ねる #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
stroke(r(60),200+r(-55,55),r(99,150),r(50))
strokeWeight(r(20))
line(X=r(W),Y=r(W),X,Y+=r(w))
++t}