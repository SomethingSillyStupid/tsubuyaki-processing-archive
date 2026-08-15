//#つぶやきProcessing #p5js
t=0,d=20
draw=_=>{
createCanvas(W=(w=200)*2,W)+noStroke()
colorMode(HSB)
for(x=-w;x<w;x+=d)
for(y=-w;y<w;y+=d)
C=cos(T=t/w),S=sin(T),
X=C*x-S*y,
Y=S*x+C*y,
fill((M=mag(X,Y))%360,abs(S)*100,w),
M<W?triangle(...[X,Y,X+d,Y,X-x,Y-y].map(x=>x+w)):0
++t}