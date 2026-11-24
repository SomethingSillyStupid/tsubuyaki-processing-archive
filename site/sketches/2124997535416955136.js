//#つぶやきProcessing #p5js
t=0,d=17
draw=_=>{createCanvas(W=(w=200)*2,W)+noFill()
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)stroke((D=min(x,y,W-x,W-y)*sin((x*t+y*t)/W/W)*2)*2,abs(E=w*cos(D/9))*2,W-D,w),
circle(x+D/8,y+E/8,D*4)
++t}