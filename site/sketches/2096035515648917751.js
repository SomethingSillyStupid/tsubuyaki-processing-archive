//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(y=0;y<W;y+=.1)
stroke(abs(360*sin((y+t)/W)),w,w),
strokeWeight(6*abs(sin(w*sin(y/W*PI)/4))),
point(w+w*sin(y/W*PI)*sin(y*t/W),y)
++t}