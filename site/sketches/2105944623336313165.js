//WIP #つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(X=x-20*cos(t/w)-w,Y=y-20*sin(t/w)-w),T=atan2(Y,X),
stroke(M*2,w,w),
point((R=(w^log(w/M)*w)/.9)*cos(T)+w,R*sin(T)+w)
++t}