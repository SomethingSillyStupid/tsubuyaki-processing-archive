//WIP #つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d)
M=mag(X=180*sin(x-w+t/w),Y=180*cos(y-w+t/w)),T=atan2(Y,X),
stroke(M*2,w,w),
point((R=(M-log(w/M)*W)/.9)*cos(T)+w,R*sin(T)+w)
++t}