//Back to simpler time... #つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noFill(P=[],F=random(9))
P.push(w*cos(t*F)+w,w*sin(t/F)+w)
P.length>7?(stroke(255*cos(F*F*t),W,W,.3),bezier(...P),P.shift(),P.shift()):0
t=++t%W}