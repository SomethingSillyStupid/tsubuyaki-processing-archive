//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)
background(0)
S=t%1200/3
D=3
if(abs(S-w)<10)D=W
stroke(C=W+(E=r(-D,D)),D,D)
fill(C,w+D,D)
for(T=0,beginShape();T<20;T+=.1)
vertex((R=w+E)*cos(T)+w,R*sin(T)+w)
endShape()
fill(0)
circle(W-S,W-S,W-2)
++t}