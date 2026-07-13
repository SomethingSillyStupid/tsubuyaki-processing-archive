//#つぶやきProcessing #p5js
t=0,d=11
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(x=0,p=q=w;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke((R=mag(X=x-w,Y=y-w))*sin(P=atan2(Y,X))+w,R*cos(P)+w,w),
strokeWeight(random(d)),
mag(x-w,y-w)<w?line(x,y,w-R*cos(U=P+t/w),R*sin(U)+w):0
++t}