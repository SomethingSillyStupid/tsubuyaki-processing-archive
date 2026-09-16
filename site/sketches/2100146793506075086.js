//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(8)
F=x=>(x<0?-1:1)*sqrt(abs(x))
for(x=0;x<W;x+=6)for(y=0;y<W;y+=6)M=mag(X=F(x-w),Y=F(y-w))*13,
stroke(360-M,w,W),
point((R=M*sin(M%6*sin(t/w)))*sin(T=atan2(Y,X))+w,R*cos(T)+w)
++t}