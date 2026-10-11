//顔みたい⋯but beard😁 #つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(d)
F=abs(sin(t/w))
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(X=x-w,Y=y-w),T=atan2(Y,X),
stroke(abs(R=w^M*(1-w/M)*F-F*30)),
point(R*sin(U=R/W*T/F)+w,w-R*cos(U))
++t}