//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
L=x=>(U=x-w,(U<0?-1:1)*log(w/abs(U)*sin(t/w)**2))
noStroke()
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)M=mag(X=L(x),Y=L(y))*60,
fill(abs(360*sin(M)),w,w),
rect(M*sin(T=atan2(Y,X)+M/W)+w,M*cos(T)+w,6)
++t}