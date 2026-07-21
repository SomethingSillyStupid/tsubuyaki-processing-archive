//#つぶやきProcessing #p5js
t=0
draw=_=>{t||createCanvas(W=(w=200)*2,W)+(P=random(9))
colorMode(HSB)
B=(a,b,c)=>a*(1-x)**2+b*2*x*(1-x)+c*x*x
C=I=>w*sin(i*P*I+t/w)+w
for(i=0;i<7;i++)for(x=0;x<1;x+=.05)stroke(B(i+P*t,t,i*17),w,w),rect(B(C(0),C(3),C(5)),B(C(2),C(4),C(6)),4)
t=++t%W}