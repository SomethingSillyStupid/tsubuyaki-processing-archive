//#つぶやきProcessing #p5js
t=0,W=400,d=99
draw=_=>{
t++%W||createCanvas(W,W)+colorMode(HSB)+(L=random(W))
for(x=p=r=0;x<W;x+=d)
for(y=q=s=0;y<W;y+=d)
stroke(abs((T=W*sin((x*y-t)/L)))%255,W,W,.1),
line(p,q,p=x+(D=d*3*sin(x*T+y/T)),q=y),
line(r,s,s=y,r=x-D)}