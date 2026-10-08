//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(8)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)
M=mag(X=x-w,Y=y-w),
stroke(360-abs(((X&Y)^M)*asin((M*t/W/99)%2-1))%360,w,w),
point(x,y)
++t}