//#つぶやきProcessing #p5js
t=0
draw=_=>{a=abs
b=n=>a(n*W+t/W)
t||createCanvas(W=(w=200)*2,W)+noStroke()
colorMode(HSB)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)
f=(abs(X=(x-w)/t)**1.9-abs(Y=(y-w)/t)**.7+b(X*Y/t)),
fill(F=b(f+t)%360,W,W),
rect(X*w+w,Y*w+w,F/40)
t=++t%W}