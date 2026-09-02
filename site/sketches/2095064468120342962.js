//#つぶやきProcessing #p5js
t=0,D=20
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+noFill(x=y=u=v=w)
colorMode(HSB)
M=x=>(X=x+(r()<.5?-1:1)*r(w))>W?X=W-X:X<0?X=-X:X
x=M(x),y=M(y),u=M(u),v=M(v)
for(i=0,stroke(r(100,300),u,w);i<D;i++)
bezier(x,y,x+i*D,y+i*D,u-i*D,v+i*D,u,v)}