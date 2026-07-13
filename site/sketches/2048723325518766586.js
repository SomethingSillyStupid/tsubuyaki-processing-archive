//#つぶやきProcessing #p5js
t=0,N=10
draw=_=>{
createCanvas(W=(w=200)*2,W)
background(W)
D=W/N
blendMode(EXCLUSION)
for(x=0;x<W;x+=D)
for(y=0;y<W;y+=D)
fill(x,99,y),
rect(x,y,abs((T=t*10)%W-x)<20&&abs(int(T/W)*D-y)<20?2*D*abs(sin(T%D/31.4)):D*abs(cos(T%D/31.4)),D)
t=(t+=.1)%400}