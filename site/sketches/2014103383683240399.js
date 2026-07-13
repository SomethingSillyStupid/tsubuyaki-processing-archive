//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
strokeWeight(4)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke(R=mag(X=x-w,Y=y-w),abs(W*tan(P=atan2(Y,X)+t)),(R*P)%w),
point(x,y),
point(R*cos(R+P)+w,R*sin(R+P)+w)
t+=.1}