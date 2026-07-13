//QRコードっぽい？ #つぶやきProcessing #p5js
t=0,d=9
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(d)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
for(i=0;i<18;i++)
stroke(R=w*atan(y+(T=(t+i)%99/37))%w,w*tan(T+x*y),Q=w*tan(U=x+y+T)%w),
point(R/w*cos(V=R+Q+U)+x,R/w*sin(V)+y)
++t}