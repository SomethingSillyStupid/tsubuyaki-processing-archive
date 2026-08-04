//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(O=random(w))
colorMode(HSB)
H=(t,n=1)=>n>9?0:(sin(t*n)-H(t,n+1))/n
for(x=0;x<W;x+=68)
for(y=0;y<W;y+=68)
stroke(abs(C=W*H((x+y-t)/w))%w+O,w,w),
strokeWeight(C/6),
point(17*H((t+x*y)/w)+x,C+y)
t=++t%W}