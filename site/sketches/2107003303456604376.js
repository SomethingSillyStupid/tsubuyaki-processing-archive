//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(X=x-w,Y=y-w)**.25*15,T=atan2(Y,X),
stroke(M*4,w,w),
point((R=3*M^4^(t/33%99))*cos(U=M*t/2e3+T)+w,R*sin(U)+w)
++t}