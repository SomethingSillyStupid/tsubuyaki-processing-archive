//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
for(x=0;x<W;x+=9)for(y=0;y<W;y+=9)T=atan2(Y=y-w,X=x-w),M=mag(X,Y),(S=tan(X*Y+T))<.1?(fill(abs(360-M+S)%360,w,w,.3),circle(x,y,dist(x,y,w*cos(U=M+t/77)+w,w*sin(S+U)+w)/9)):0
++t}