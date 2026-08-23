//#つぶやきProcessing #p5js
t=.17
draw=_=>{
createCanvas(W=(w=200)*2,W)
background(0,1)
colorMode(HSB)
for(i=1,x=y=w;i<W;i+=.01)
stroke(abs(i*sin(x+y))%360,w,w),
line(x,y,x+=log(i)*cos(T=i*i/t),y+=log(i)*sin(T))
t=(t+=1e-3)>.2?.17:t}