//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(7)
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)M=mag(X=x-w,Y=y-w),
stroke(abs(W*sin((x+y+t)/99)),w,w),
point(M*sin(T=atan2(Y,X)^M%(t%w)+X/4)+w,M*cos(T)+w)
++t}