//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(7)
F=(x,f)=>(x<0?-1:1)*log(abs(x))+f(t/17)
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)M=mag(F(X=x-w,sin),F(Y=y-w,cos))*23,stroke(M*1.5,w,W),point(M*sin(T=atan2(Y,X)+M/(X*Y))+w,M*cos(T)+w)
++t}