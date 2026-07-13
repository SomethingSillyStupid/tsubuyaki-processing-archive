//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(d=random(7,11))
for(b=0;b<W;b+=d)
for(c=0;c<W;c+=d)
for(m=-9;m<9;m++)
abs((A=d*(1/sin(t*(b-w)/9)-1/cos(t*(c-w)/9)))-m)>1?(fill(M=abs(A*20*d),w,w),rect(b,c,d)):0
t=++t%30}