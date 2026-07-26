//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(8)
for(x=-w;x<w;x+=2)
for(y=-w;y<w;y+=2)
abs(D=x*x+sin(t/W)*y*y-w*w)%197<23?(stroke(abs(D)%360,w,w),point(x+w,y+w)):0
++t}