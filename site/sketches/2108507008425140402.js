//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
colorMode(HSB)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)M=mag(X=x-w,Y=y-w),stroke(360-M,w,w),point((R=X^Y&w*sin(t/M))*P(cos(U=atan2(X,Y)+R),.7)+w,R*P(sin(U),2.3)+w),strokeWeight(M/17)
++t}