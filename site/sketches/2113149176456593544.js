//clearly a WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(8)
stroke('sienna')
fill('orange')
for(D=150;D>0;D-=50,endShape(CLOSE))
for(T=0,beginShape();T<TAU;T+=.1)
vertex((D+5*sin(-T*5))*cos(T)+w,150*sin(T)+w)
++t}