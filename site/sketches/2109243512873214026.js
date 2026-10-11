//#つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
background(0,.01)
strokeWeight(8)
F=abs(cos(t/W/2))
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)M=mag(X=x-w,Y=y-w),T=atan2(Y,X),stroke((R=W*asin(F-w/M))+w,w,w),point(R*sin(U=R*2/F^T)+w,w-R*cos(U))
++t}