//#つぶやきProcessing #p5js
t=0
draw=_=>{r=_=>random(-9,9)
t||createCanvas(W=(w=200)*2,W)+(a=r(),b=r())
P=(x,a,n=3)=>n<1?1:a*x/n*P(x,a-1,n-1)
for(T=-PI;T<PI;T+=.001)
stroke(R=P(T,a)*99,U=P(T+t/w,b)*44,P(t/77,a)*w),
point(R*cos(U)+w,R*sin(U)+w)
t=++t%77}