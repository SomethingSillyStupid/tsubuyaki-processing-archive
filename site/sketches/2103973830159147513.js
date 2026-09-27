// #つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
C=T=>R*.8*cos(T)
strokeWeight(2)
for(x=0;x<W;x+=9)for(y=0;y<W;y+=9)R=mag(X=x-w,Y=y-w),
T=atan2(Y,X),stroke(V=abs(R*sin(T+t/w)),w,w),line(C(U=V/W*T)+50,C(U-1.6)+w,(R+=V,C(U)+50),C(U-1.6)+w)
++t}