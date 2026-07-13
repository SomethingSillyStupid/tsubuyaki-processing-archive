//#つぶやきProcessing #p5js
t=0,d=11
draw=_=>{
createCanvas(W=(w=200)*2,W)
background(0)
for(x=0,p=q=w;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke((R=mag(x-w,y-w))*sin(P=t/w)+w,R*cos(P)+w,R),
strokeWeight(random(d)),
R<abs(w*cos(t/w))?line(p,q,q=x+cos(t/w),p=y+sin(t/w)):0
++t}