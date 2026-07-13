//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+(D=-r())
translate(w,w)
rotate(t)
for(i=x=1,p=5,q=0;i<w;i++)
line(p,q,p=(R=5*(x+=x**D*1.2))*cos(T=i/w*TAU),q=R*sin(T)),
stroke((p*q)%W,-(R/D)%W,(t/i)%W)
t=(t+=6.1)>W*4?0:t}