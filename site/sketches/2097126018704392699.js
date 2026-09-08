//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
L=x=>(U=x-w,(U<0?-1:1)*log(abs(sin(t/W)+U/10)))
strokeWeight(8)
for(x=0;x<W;x+=4)
for(y=0;y<W;y+=4)
M=mag(X=L(x),Y=L(y))*66,
T=atan2(Y,X),
stroke(M/2,w,w),
point(M*cos(V=M^T+t)+w,M*sin(V)+w)
++t}