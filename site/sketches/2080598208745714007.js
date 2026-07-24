//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
rectMode(CENTER)
noStroke()
for(i=t;i<W+t;i++)
translate(X=150*cos(T=i/w*TAU)+w,Y=150*sin(T)+w),
fill(['red','blue','yellow'][i%3]),
rotate((i+t)/41),
rect(0,0,57),
resetMatrix()
++t}