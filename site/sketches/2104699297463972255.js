// #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(7)
for(x=0;x<W;x+=6)for(y=0;y<W;y+=6)
R=mag(X=x-w,Y=y-w),
T=atan2(Y,X),
stroke(V=abs(w*sin(T-t/w)),w,w),
point((Q=R^V)*sin(U=T+V/R*3)+w,Q*cos(U)+w)
++t}