//#つぶやきProcessing #p5js
t=0
draw=_=>{a=abs
b=n=>a(n*W+t/W)
t||createCanvas(W=(w=200)*2,W)+noStroke()
colorMode(HSB)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)
f=((X=(x-w)/t)**2+(Y=(y-w)/t)**2+b(X*Y/t)),
fill(F=b(f)%360,W,W),
rect(x,y,F/50)
t=++t%W}