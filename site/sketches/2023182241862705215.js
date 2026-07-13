//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+noStroke(r=random,T=triangle)
fill(r(W),r(W),r(W))
blendMode(r([OVERLAY,EXCLUSION]))
ellipse(w,w,W,w)
T(C=100,D=C+20,C+80,C,C+45,C-45)
T(C=300,D,C-80,D-20,C-45,D-55)
filter(r([BLUR,ERODE,DILATE,OPAQUE]))
}