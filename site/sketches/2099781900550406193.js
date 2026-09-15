//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(23)
F=x=>(x<0?-1:1)*sqrt(abs(x/t*w))
for(x=0;x<W;x+=6)for(y=0;y<W;y+=6)M=mag(X=F(x-w),Y=F(y-w))*F(t*6),
stroke(M,w,W),
point(M*sin(T=atan2(Y,X)+w/M/X/Y)+w,M*cos(T)+w)
++t}