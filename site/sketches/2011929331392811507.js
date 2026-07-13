//#つぶやきProcessing #p5js
t=0
draw=_=>{r=_=>random(P=TAU)
createCanvas(W=(w=200)*2,W)
t||(A=[a=r(),b=r(),-a,c=r(),-c,-b])
d=60
for(T=0;T<P;T+=P/37,line(x,y,w,w))for(i=1,x=y=w;i<6;i++)stroke(i*30,w*cos(T+i),w),
line(x,y,x=d*cos(U=A[i-1]+A[i]+T+t/w)+x,y=d*sin(U)+y)
t=++t%w}