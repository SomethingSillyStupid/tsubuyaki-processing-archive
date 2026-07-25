//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
rectMode(CENTER)
noStroke()
for(i=0;i<W;i++)
translate(X=150*cos(T=(i+t)/W*TAU)+w,Y=150*sin(T*3)+w),
fill(abs(R=W*sin(X+Y)),w,w),
rotate((t*i)/W),
rect(0,0,30),
resetMatrix()
++t}