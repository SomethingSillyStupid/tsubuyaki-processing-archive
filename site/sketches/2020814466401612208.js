//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+(M=r(99),D=r(2,9))
translate(w,w)
rotate(t*D)
for(i=0,x=0,R=p=M,q=0;i<9;i+=.1)
line(p,q,p=(R=(R+M*D*sin(x+=i))%w)*cos(i/w*TAU),q=R*sin(i/w*TAU)),
stroke(p*sin(D+i),R,x*cos(x))
t=(t+=8)>W*4?0:t}