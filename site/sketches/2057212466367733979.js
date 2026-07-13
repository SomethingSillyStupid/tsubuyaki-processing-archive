//無限ループに陥る恐怖と戦いながら #つぶやきProcessing #p5js
t=0
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)
C=(T=TAU)=>T<0?0:(point(R*cos(T)+w+d,R*sin(T)+w),C(T-.01))
noFill()
for(i=d=0,R=550;R>0;i++)
C(),
d+=r(-2,2),
R-=abs(d)/2
++t}