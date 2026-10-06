//#つぶやきProcessing #p5js
t=150,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
stroke(abs(R=sin((x^y&~t/w)+t/99))*W,w,w),
point(x+R%d*cos(y+R*t/w),y+R%d*sin(x+R*t/w))
++t}