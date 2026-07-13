//ふるふる #つぶやきProcessing #p5js
t=0,d=11
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(y=0;y<W;y+=d)
for(x=0;x<W;x+=d)
stroke((W*(1-y*y/W/W+.4))%W,noise(x*y)*w,w),
strokeWeight(10*d*sin(r((2-y/W))/3)),
line(x,y,x,y)
++t}