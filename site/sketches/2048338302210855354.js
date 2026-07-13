//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)+strokeWeight(5)
colorMode(HSB)
M=(x,n)=>n>60?1:M(x,n+1)*(1-(x/n)**2)
for(D=0;D<30;D+=.1)
for(T=0;T<TAU;T+=.1)
stroke(r(T)*50+170,w,w),
point(30*M(U=T+D+t/w,.5)+w,30*T*PI*M(U,1)+w)
t=++t%99}