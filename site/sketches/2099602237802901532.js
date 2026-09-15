//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(7)
F=x=>(x<0?-1:1)*sqrt(abs(x/sin(t/W)))
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)M=mag(X=F(x-w),Y=F(y-w))*10,
stroke(abs(360*sin(D=w/M)),w,W),
point(M*sin(T=atan2(Y,X)+D)+w,M*cos(T)+w)
++t}