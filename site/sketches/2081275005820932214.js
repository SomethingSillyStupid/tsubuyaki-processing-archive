//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(8)
for(x=-w;x<w;x+=8)
for(y=-w;y<w;y+=8)
(abs(D=x*x-sin(t/41)*y*y)-w)>0?(stroke(abs(D*tan(t/W))%360,w,w),point(x+w,y+w)):0
++t}