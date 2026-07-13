t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+textAlign(C=CENTER,C)
background(0,.1)
textSize(133)
push()
translate(113*cos(T=t*9)+w,99*sin(T)+w)
rotate(-T)
fill(T%255,w,w,!T?.1:1)
text(...'#つぶやきProcessing #p5js'[int(t/71)%21],0,0)
pop()
t++}