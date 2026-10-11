//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(X=x-w,Y=y-w),T=atan2(Y,X),
stroke((R=W*abs(3-W/M)*cos(t/w))%10,R,R),
strokeWeight(abs(R/2)),
point(R*sin(U=R/W+T)+w,w-R*cos(U))
++t}