//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
F=abs(sin(t/w))
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(X=x-w,Y=y-w),T=atan2(Y,X),
stroke(R=9^M*(F-F/M)+F*40+30,w,w),
point(R*cos(U=R/w+T*F)+w,R*sin(U)+w)
++t}