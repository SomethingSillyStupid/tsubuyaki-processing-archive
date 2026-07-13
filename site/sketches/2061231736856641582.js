//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(x=0;x<W;x+=6)
for(y=0,p=x,q=0;y<W;y+=6)
abs((X=(x-w))**2+(Y=(y-w))**2)<w*w?(stroke((t*sin(X+Y))%255,w,w),line(q,p,q=y,p=x+29*(x-X)/W*sin((y-w)/9+t))):(stroke(0),line(q,p,q=y,p=x))
t=(t+=6)%W}