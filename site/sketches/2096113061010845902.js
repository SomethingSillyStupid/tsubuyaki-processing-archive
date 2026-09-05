//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(y=0;y<W;y+=.1)
stroke(abs(180-59*cos((y+t)/w)),w,w),
strokeWeight(16*abs(D=sin(w*sin(y/W*PI)/4))),
point(w+w*sin(y/W*PI)*sin(y*t/W),y+19*D*sin(y+t/4))
++t}