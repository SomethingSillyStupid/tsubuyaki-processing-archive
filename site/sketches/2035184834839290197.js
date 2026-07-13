//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{frameRate(9)
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
blendMode(DIFFERENCE)
textSize(W*1.5)
textAlign(CENTER,CENTER)
fill(random(255),255,255,50)
text(...random("ABCDEFG".split('')),w+random(-8,8),w+random(-8,8))}