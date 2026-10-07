//#つぶやきProcessing #p5js
t=150,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
stroke(abs(R=asin(((x&y&t)/W)%2-.5))*W,w,w),
point(x+R%d*cos(y+R*t/7),y+R%d*sin(x+R*t/7))
++t}