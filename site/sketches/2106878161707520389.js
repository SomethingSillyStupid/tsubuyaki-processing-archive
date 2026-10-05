//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noFill()
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
stroke(abs(R=sin((x^y^w)+t/99))*w,w,w),
point(x+d*cos(y+R*t/w),y+d*sin(x+R*t/w))
++t}