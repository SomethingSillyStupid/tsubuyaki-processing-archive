//#つぶやきProcessing #p5js
t=0,d=7
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(x=0;x<W;x+=d)for(y=0,p=x,q=0;y<W;y+=d)
stroke(190-(D=mag(X=x-w,Y=y-w)),w,w),strokeWeight(D/39),D<w*sin(U=x*y+t/71)**2?line(p,q,p=x+X/9,q=y+Y/9):line(p,q,p=x,q=y)
t=(t+=d)%W}