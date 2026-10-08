//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
colorMode(HSB)
strokeWeight(8)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)M=mag(X=x-w,Y=y-w),stroke(M,w,w),point((R=M%(t%W))*P(cos(U=atan2(Y,X)/w+R/4),N=3*cos(t/w))+w,R*P(sin(U),N)+w)
++t}