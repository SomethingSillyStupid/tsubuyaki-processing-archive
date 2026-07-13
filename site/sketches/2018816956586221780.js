//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(A=random(w))
C=x=>w*cos(x+t/w)+w
for(T=0;T<TAU;T+=.1)
h=dist(x=C(T),y=C(T+1.6),u=C(U=-T+t/w*A),v=C(U-1.6))/w,stroke(W*cos(X=x+h),W*sin(Y=y+h),W*sin(x+v),99),line(X,Y,u,v)
t=++t%w}