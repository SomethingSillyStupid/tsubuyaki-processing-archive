// #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(8)
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)
R=mag(X=x-w,Y=y-w),
T=atan2(Y,X),
stroke(V=abs(R*sin(T+t/w)),w,w),
point((Q=R&V*3)*sin(U=V/T/w)+w,Q*cos(U)+w)
++t}