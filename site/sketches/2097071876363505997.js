//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(6)
D=u=>2*(1.1+cos(u/w*PI)**2)
for(x=0;x<W;x+=D(x))
for(y=0;y<W;y+=D(x))
M=mag(X=x-w,Y=y-w)*2,
T=atan2(Y,X)+t/w,
stroke(M,w,w),
point(M*cos(T)+w,M*sin(T)+w)
++t}