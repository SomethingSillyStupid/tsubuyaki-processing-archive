//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{createCanvas(W=(w=200)*2,W)
for(x=0;x<W;x+=d)for(y=0,p=x,q=0;y<W;y+=d)
stroke(0),line(p,q,p=x+(e=(D=mag(x-w,y-w))<w*abs(U=sin(t/31))?D/9*sin(U+x*y):0),q=y-e)
t++}