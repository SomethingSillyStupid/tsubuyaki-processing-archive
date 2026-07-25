//so much on this for now #つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
rectMode(CENTER)
noStroke()
for(i=0;i<W;i++)
translate(150*cos(T=(i+t)/W*TAU)+w,150*sin(T)+w),
fill(abs(R=W*sin(t/3-T)),w,w),
rotate(t/19),
rect(0,0,28),
resetMatrix()
++t}