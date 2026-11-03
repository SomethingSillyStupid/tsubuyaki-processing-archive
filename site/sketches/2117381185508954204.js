//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)
stroke('blue')
for(x=0;x<W;x+=d)for(y=0,p=x,q=0;y<W;y+=d)line(p,q,p=x+(e=(D=mag(x-w,y-w))%11<13*abs(U=sin(t/71))?D/17*sin(U*((x-w)+(y-w))/19):0),q=y-e)
t++}