//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
colorMode(HSB)
strokeWeight(8)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)M=mag(X=x-w,Y=y-w),T=atan2(Y,X),stroke(M,w,w),point((R=M%w+73*sin(t/w))*P(cos(U=T+R/4),.6)+w,R*P(sin(U),1.1)+w)
++t}