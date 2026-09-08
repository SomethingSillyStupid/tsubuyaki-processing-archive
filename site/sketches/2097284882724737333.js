//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
L=x=>(U=x-w,(U<0?-1:1)*log(abs(U/5+sin(t/W))))
strokeWeight(8)
for(x=0;x<W;x+=6)for(y=0;y<W;y+=6)M=mag(X=L(x),Y=L(y))*66,
T=atan2(Y,X),stroke(M,w,w),point((R=M/3<<T)*cos(V=M+T)+w,R*sin(V)+w)
++t}