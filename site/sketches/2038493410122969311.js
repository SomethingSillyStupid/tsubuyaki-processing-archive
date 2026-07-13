//#つぶやきProcessing #p5js
t=0,d=9
draw=_=>{
createCanvas(W=(w=200)*2,W)
background(W)
strokeWeight(d)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
for(i=0;i<18;i++)
stroke(R=w*atan(y+(T=(t+i)%99/37))%w,w*cos(x*y-T),Q=w*sin(U=x+y+T)%w),
point(R*cos(U+Q)+w,R*sin(U+Q)+w)
++t}