//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(x=-2;x<2;x+=.01)for(y=-2;y<2;y+=.01)
T=(x*x+y*y)/2,
stroke(I=map(sin(t/17)*T+cos(t)*T*T+sin(t/17)*sin(7*atan2(y,x))*T**(1/7),-1,1,0,360),w,w),
I%61<7?point(x*w/2+w,y*w/2+w):0
++t}