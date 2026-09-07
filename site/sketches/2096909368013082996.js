//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(3)
D=u=>4*(1.1+cos(u/(w+sin(t/7))*PI))
for(x=0;x<W;x+=D(x))
for(y=0;y<W;y+=D(y))
M=mag(X=x-w,Y=y-w),
T=atan2(Y,X),
stroke(M,w,w),
point(M*cos(T)+w,M*sin(T)+w)
++t}