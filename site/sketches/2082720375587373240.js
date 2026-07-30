//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
for(x=0;x<W;x+=16)for(y=0;y<W;y+=16)
translate(x,y),
rotate(t/(R=mag(X=x-w,Y=y-w))),
fill(D=min(W-x,W-y,R*cos(T=atan2(Y,X))+w,R*sin(T)+w),w,w,.2),
ellipse(0,0,D,D/2),
resetMatrix()
++t}