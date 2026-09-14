//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(7)
F=x=>(x<0?-1:1)*log(abs(x)+tan(t/w))
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)M=mag(F(X=x-w),F(Y=y-w))*20,
stroke(340,70,W),
point(M*sin(T=atan2(Y,X))+w,M*cos(T)+w)
++t}