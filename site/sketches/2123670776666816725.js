//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t++%34||(M=int(t%W/34))
for(x=-1;x<1;x+=.01)for(y=-1;y<1;y+=.01)
T=(4*x*x+4*y*y)/2,
stroke(I=map(T+T*T+cos(T*9*sin(t/17))*sin(M*atan2(y,x))*T**(1/M),-9,9,0,360),w,w),
I%30<9?point(x*w+w,y*w+w):0}