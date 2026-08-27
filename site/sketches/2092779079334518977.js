//#つぶやきProcessing #p5js
t=0,d=20
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
F=u=>sin(t/71)*d*(int(u/d)%2?-1:1),
colorMode(HSB)
background(w*sin(t/31),.01)
strokeWeight(d-2)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)M=mag(x-w,y-w),
stroke(M/w*360,w,w,.4),M<w?point(x+F(y),y+F(x)):0
t++}