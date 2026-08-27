//#つぶやきProcessing #p5js
t=0,d=20
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
background(w*sin(t/31),.01)
strokeWeight(d-2)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
M=mag(x-w,y-w),
stroke(M/w*360,w,w,.4),
M<w?point(x+sin(t/71)*d/2*(int(y/d)%2?-1:1),y):0
t++}