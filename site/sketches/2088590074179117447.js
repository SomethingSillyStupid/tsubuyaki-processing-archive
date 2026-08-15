//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+noStroke()
colorMode(HSB)
for(x=-w,T=2*sin(t++/w);x<w;x+=9)for(y=-w;y<w;y+=9)C=Math.cosh(T),S=Math.sinh(T),
X=C*x-S*y,Y=S*x+C*y,fill(mag(x+y,X-Y),abs(C)*100,w),
triangle(...[X,Y,X-9,Y,X+y,Y-x].map(x=>x+w))}