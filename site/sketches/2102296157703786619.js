//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(4)
for(x=0;x<W;x+=6)for(y=0;y<W;y+=6)
R=mag(X=x-w,Y=y-w)*sin(t/w),
T=atan2(Y,X),
stroke(abs(X*Y+R)%360,w,w),
point((Q=atan(abs(R/(w-R)))*94)*cos(T)+w,Q*sin(T)+w)
++t}