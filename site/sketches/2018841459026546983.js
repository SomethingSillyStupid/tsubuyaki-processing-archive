//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(A=random(w))
C=x=>w*cos(x+t/w)+w
for(T=0;T<TAU;T+=.1)
h=dist(x=C(T),y=C(T+1.6),u=C(U=-T*A+t/w),v=C(U-1.6))/w,stroke(W*cos(h),W*tan(A+h),W*sin(x+v)),line(x,y,u,v)
t=++t%w}