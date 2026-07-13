//#つぶやきProcessing #p5js
t=0,d=9
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
for(i=0;i<18;i++)
stroke(R=w*atan(y+(T=(t-i)%99/37))%w,Q=w*tan(U=x+y+T)%w,w*tan(T+x*y)),
strokeWeight((R-Q)/12),
point(R*cos(V=R*Q)+w,R*sin(V)+w)
++t}