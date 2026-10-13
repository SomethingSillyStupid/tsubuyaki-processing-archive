//#つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
background(0,1/W)
strokeWeight(8)
F=abs(cos(t/w))
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)T=atan2(Y=y-w,X=x-w),stroke((R=W^255*(F-T)),w,w,.1),point(R*sin(U=R/F/71+T+.6)+w,w-R*cos(U))
++t}