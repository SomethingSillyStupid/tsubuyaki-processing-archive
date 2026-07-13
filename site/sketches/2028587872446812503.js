//#つぶやきProcessing #p5js
t=0,d=32
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)
for(x=p=0;x<W;x+=d*5)
for(y=q=0,stroke(shuffle([(x+(T=t%W))%W,abs(W-T),T]));y<W;y+=d)
strokeWeight(x/w+y/w+T/w),
line(p,q,p=x+d*5*cos(U=(y+t)/34),q=y),
line(q,p,q=y,p=x+d*5*sin(U+t/83))
}