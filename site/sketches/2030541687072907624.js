//#つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)+
+noFill(a=random(9),C=cos(a),S=sin(a))
c=(r,t)=>r*cos(t)+w
x=y=w
for(i=0;i<W;i++)
u=(C*x+S*y),
y=(-(S+C/9)*x+(C+S/9)*y),
stroke((x=u)+i,i,T=t-y,w),
strokeWeight(6),
point(c(x+i,T),c(y+i,T-1.6))
t=++t%w}