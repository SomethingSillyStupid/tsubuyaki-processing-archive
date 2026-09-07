//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
L=x=>(U=x-w,(U<0?-1:1)*log(abs(U)))
for(x=0;x<W;x+=2)
for(y=0;y<W;y+=2)
M=mag(X=L(x),Y=L(y))*33,
T=atan2(Y,X)+t/w,
stroke(M,w,w),
point(M*cos(T)+w,M*sin(T)+w)
++t}