//#つぶやきProcessing #p5js
t=0
draw=_=>{frameRate(1)
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
blendMode(DIFFERENCE)
textSize(W)
textAlign(CENTER,CENTER)
fill(random(255),255,255,5)
translate(w+random(-8,8),w+random(-8,8))
rotate(second())
text(second(),0,0)}