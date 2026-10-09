//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(8)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)
T=mag(X=x-w,Y=y-w),
stroke(abs((X^Y)*asin((T*t/W/99)%2-1))%360,w,w),
point(x,y)
++t}