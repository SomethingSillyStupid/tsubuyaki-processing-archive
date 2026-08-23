//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(i=0,x=y=w;i<w;i++)
stroke(abs((i+t)*sin(t+x+y))%360,w,w),
line(x,y,x+=i*cos(T=i*t/w),y+=i*sin(T))
++t}