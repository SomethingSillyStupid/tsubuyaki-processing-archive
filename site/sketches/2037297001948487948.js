//#つぶやきProcessing #p5js
t=0
draw=_=>{a=abs
createCanvas(W=(w=200)*2,W)+noStroke()
for(x=-3;x<3;x+=.2)for(y=-3;y<3;y+=.2)
for(i=-5,R=log(mag(x,y))*w,T=atan2(y,x);i<5;i++)
fill(a(R+T),a(U=sin(R/w+(T+t/31)))*w,a(R-T)*w),
rect(R*cos(V=T+U/7)+w,R*sin(V)+w,a(R/99)*7)
t++}