//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noFill()
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
stroke(abs(R=sin(log(x^y^w)/3+t/w))*w,w,w),
point(x+d/R*cos(t/w),y+d/R*sin(t/w))
++t}