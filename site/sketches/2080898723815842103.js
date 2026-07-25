//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
rectMode(CENTER)
noStroke()
for(i=0;i<W;i++)
translate(X=150*cos(T=(i+t)/W*TAU)+w,Y=150*sin(T)+w),
fill(abs(R=W*sin(X+Y)),w,w),
rotate(T*2.7-t/9),
rect(0,0,37),
resetMatrix()
++t}