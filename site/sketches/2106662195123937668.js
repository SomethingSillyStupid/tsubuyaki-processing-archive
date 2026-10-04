//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(X=w*sin(x+t/w),Y=w*cos(y+t/w)),T=atan2(Y,X),
stroke(M,w,w),
point((R=M%(t%W)*3)*cos(U=R/M+T)+w,R*sin(U)+w)
++t}