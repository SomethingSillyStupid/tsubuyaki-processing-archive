//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+(a=random(-9,9))+colorMode(HSB)
P=(x,a,n=5)=>n<1?T:a*sin(x*n)-P(x,a-1,n-1)
for(T=-PI;T<PI;T+=.001)
stroke(A=(P(a+T,T-a)*W)%255,w,w),
rect((R=P(T,w))*cos(U=P(T,a+t/W)*4)+w,R*sin(U)+w,P(a,a))
t=++t%w}