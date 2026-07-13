//#つぶやきProcessing #p5js
t=0,O=0
draw=_=>{
frameRate(2)
r=random
createCanvas(W=(w=200)*2,W)
translate(O,0)
O+=r(50)
line(w,0,w,W)
textSize(99)
text('TACO',O-w,w)
textSize(20)
text('株安、原油高',w,w)
if(O>150)O=0
++t}