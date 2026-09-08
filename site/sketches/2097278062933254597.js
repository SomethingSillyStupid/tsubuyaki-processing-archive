//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(6)
for(x=0;x<W;x+=4)
for(y=0;y<W;y+=4)
M=mag(X=x-w,Y=y-w),
T=atan2(Y,X)+t/w,
stroke(abs(X+Y)%360,w,w),
point(M*cos(U=T+X)+w,M*sin(U)+w)
++t}