//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+noStroke(U=TAU/7,D=r())
translate(w,w)
rotate(t*D)
for(i=0,x=1;i<w;i++)
fill(w*sin(D+i),p=(R=w*(x+=(x**.5-D)*.01))*cos(I=i*U),q=R*sin(I+x)),
rect(p,q,abs(p-q)/7)
t=(t+=6.1)>W*2?0:t}