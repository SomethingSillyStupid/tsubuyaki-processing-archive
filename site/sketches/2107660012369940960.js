//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
colorMode(HSB)
strokeWeight(8)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)M=mag(X=x-w,Y=y-w),T=atan2(Y,X),stroke(360-M,w,w),point((R=M&M*sin(t/97))*P(cos(U=T+M),.6)+w,R*P(sin(U),.6)+w)
++t}