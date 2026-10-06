//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(X=x-w,Y=y-w),T=atan2(Y,X),
stroke(M,w,w),
point((R=M%W*cos(t/w)**2)*cos(U=R^M+M*T/13)+w,R*sin(U)+w)
++t}