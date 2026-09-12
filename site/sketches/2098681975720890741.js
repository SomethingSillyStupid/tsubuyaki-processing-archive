//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(6)
L=x=>(U=x-w,(U<0?-1:1)*log(99*sin(t/W)**2-abs(w/U)))
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)M=mag(X=L(x),Y=L(y))*44,
stroke(360-M,w,w),
point(M*sin(T=atan2(Y,X)+W/M)+w,M*cos(T)+w)
++t}