//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
F=abs(tan(t/w))
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(X=x-w,Y=y-w),T=atan2(Y,X),
stroke(M,w,w),
point((R=99^M*(1-w/M*F))*cos(U=R/w+T)+w,R*sin(U)+w)
++t}