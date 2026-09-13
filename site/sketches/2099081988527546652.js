//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
F=u=>w*[sin,cos][x<w?0:1](u+t/W)
strokeWeight(7)
for(x=0;x<W;x+=2)for(y=0;y<W;y+=2)M=mag(X=F(x),Y=F(y)),
stroke(W-M,w,w),
point(M*sin(T=atan2(X,Y)+t/M)+w,M*cos(T)+w)
++t}