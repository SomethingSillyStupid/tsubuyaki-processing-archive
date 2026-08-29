//ロトレリーフ #つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
for(R=w/2,i=0;R<w;R+=20,i++)x=50*cos(U=t/71)+w,y=50*sin(U)+w,fill(i%2?W:0),circle(x-R/2*cos(U),y-R/2*sin(U),W-R)
for(R=w,i=0;R>0;R-=20,i++)fill(i%2?W:0),circle(x-R/2*cos(U),y-R/2*sin(U),R)
t++}