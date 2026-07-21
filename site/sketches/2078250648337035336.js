//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB,1)
strokeWeight(d)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
point(x,y),
stroke(abs(cos(tan(x)*sin(y)-t/91)),1,1),
point(((D=mag(X=x-w,Y=y-w))*cos(T=t/w+atan2(Y,X)))+w,D*sin(T)+w)
++t}