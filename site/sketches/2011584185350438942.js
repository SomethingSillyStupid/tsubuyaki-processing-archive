//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(d=int(r(2,5)))
for(b=0;b<W;b+=d)
for(c=0;c<W;c+=d)
for(m=-9;m<9;m++)
abs((A=t*d*cos((b-w)/9))-t*d*sin((c-w)/9)-m)<1?(stroke(abs(A),w,w),rect(b+cos(A),c+sin(A),d)):0
t=++t%W}