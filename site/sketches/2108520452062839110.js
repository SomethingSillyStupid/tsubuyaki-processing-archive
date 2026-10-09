//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
colorMode(HSB)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)M=mag(X=x-w,Y=y-w),stroke(M,w,w),point((R=M*sin(M+t/W))*P(cos(U=atan2(X,Y)-M+t/w),M/w)+w,R*P(sin(U),M/w)+w),strokeWeight(M/9)
++t}