//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(T=0,beginShape();T<TAU;T+=.1)
vertex((150+5*sin(-T*5))*cos(T)+w,150*sin(T)+w)
fill('orange')
endShape(CLOSE)
fill(0)
D=9*sin(t/91)
triangle(120,w+D,160,w,140,170)
triangle(280,w+D,240,w,260,170)
++t}