// #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(x=0;x<W;x+=6)for(y=0;y<W;y+=6)
R=mag(X=x-w,Y=y-w),
T=atan2(Y,X),
stroke(V=abs(R^w*sin(t%R/w)),w,w),
strokeWeight((w-V)/9),
point((Q=R&V)*sin(U=V/w%R*w)+w,Q*cos(U)+w)
++t}