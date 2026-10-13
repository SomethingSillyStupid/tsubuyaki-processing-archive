//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)T=atan2(Y=y-w,X=x-w),stroke(abs(R=W*sin(t/W+T*30))*2,w,w,.2),strokeWeight(R),point(R*sin(U=R/T/w)+w,w-R*cos(U))
++t}