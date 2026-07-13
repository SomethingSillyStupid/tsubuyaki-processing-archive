//RIP Hironaka Heisuke #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W,WEBGL)+colorMode(HSB)
rotateX(t/9)
rotateY(t/9)
rotateZ(t++/9)
for(u=-5;u<5;u+=.1)
for(v=-5;v<5;v+=.1)
stroke(mag(u,v)*50,W,W),
point(u*v*8,u*8,-v*v*8)}