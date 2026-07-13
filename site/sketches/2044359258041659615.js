//#つぶやきProcessing #p5js
t=0
draw=_=>{
frameRate(1)
r=random
t++||createCanvas(W=(w=200)*2,W)
background(13,119,61,w)
for(y=0;y<W;y+=r(3,19))
for(x=0;x<W;x>W?x-=r(10):x)
strokeWeight(r(4,50)),
stroke(r(w),r(w,255),r(w),r(99)),
line(x+r(13,23),y,x+=r(13,40),y)
}