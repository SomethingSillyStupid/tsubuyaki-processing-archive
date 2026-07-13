//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
background('orange')
colorMode(HSB)
for(x=-9;x<9;x+=.2)
for(y=-9;y<9;y+=.2)
fill(random(255),w,w),
abs((x*x+sin(t/37)*y*y)%3-2)<1?rect(x*w/9+w,y*w/9+w,5):0
++t}