//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
rectMode(CENTER)
noStroke()
for(i=0;i<W;i++)
translate(X=150*cos(T=(i+t)/W*TAU)**5+w,Y=150*sin(T)+w),
fill(abs(R=W*sin(X+Y)),w,w),
rotate(I=T*i/w),
rect(0,0,I%11*2),
resetMatrix()
++t}