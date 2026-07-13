//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)
for(x=p=r=0;x<W;x+=d*5){
stroke(shuffle([(x+(T=W*sin(t/71)))%W,abs(W-T),T]))
for(y=q=s=0;y<W;y+=d)
strokeWeight(x/w+y/w+T/w),
line(p,q,p=x+(D=d*3*cos((y+x)/T)),q=y),
line(r,s,r=x-D,s=y)}}