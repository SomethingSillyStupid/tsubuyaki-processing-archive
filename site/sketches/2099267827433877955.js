//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(7)
F=(x,f)=>log(abs(x-w))+f(t/w)
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)M=mag(X=F(x,x=>1/tan(x)),Y=F(y,tan))*9,
stroke(360-M,w,w),
point(M*sin(T=atan2(Y,X)^(X-Y)*M/17)+w,M*cos(T)+w)
++t}