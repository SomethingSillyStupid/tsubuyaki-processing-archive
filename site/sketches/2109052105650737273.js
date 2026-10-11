//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
C=['#ccc893','#b3dfdc','#F0F8FF']
t||createCanvas(W=(w=200)*2,W)+noStroke()
X=r(W),Y=r(W),R=r(50)
for(T=0,beginShape();T<TAU;T+=.1)
vertex((R+r(-5,15))*cos(U=T+r(-.1,.1))+X,(R+r(-5,15))*sin(U)+Y)
fill(C[int(r(3))])
endShape()
++t}