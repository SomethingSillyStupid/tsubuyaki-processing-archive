//#minacoding #つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)+colorMode(HSB)
for(x=0;x<W;x+=6)for(y=q=0,p=x;y<W;y+=6)stroke(abs(X=x-w)+abs(Y=y-w)-w<0?(M=mag(X,Y),line(q,p=w-99*cos(T=atan2(Y,X)+t/w),p,q=w-99*sin(T)),50+(x+y)%155):(line(p,q,p=y,q=x),w),w,w)
++t}