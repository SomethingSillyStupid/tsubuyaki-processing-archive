//#つぶやきProcessing #p5js
t=0,d=3
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(3)
for(x=-w;x<w;x+=d)for(y=-w;y<w;y+=d)
stroke(mag(x,y)*abs(x+y+t)/31%360,w,w),
abs(tan(x+y+t/7)-sin(x-y))<1?point(x+w,y+w):0
++t}