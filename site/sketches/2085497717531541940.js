//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d/2)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke(M=mag(w*cos(T=t/w+atan2(y-w,x-w))+w,w*sin(T)+w)%360,w,w),
line(x,y,x+d*cos(M),y+d*sin(M))
++t}