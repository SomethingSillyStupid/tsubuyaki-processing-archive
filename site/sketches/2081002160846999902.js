//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(x=-w;x<w;x++)
point(x+w,x*x/w*1.5),
point(x+w,280-(x*x*(x-w)*(x+w))/W/W/29)
circle(130,130,50)
circle(270,130,50)
fill(0)
circle(130,130,30)
circle(270,130,30)
quad(160,w,w,160,240,w,w,240)
++t}