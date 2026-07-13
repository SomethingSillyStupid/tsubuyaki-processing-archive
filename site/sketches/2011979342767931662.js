//#つぶやきProcessing #p5js
t=0
draw=_=>{r=_=>random(P=TAU)
createCanvas(W=(w=200)*2,W)
t||(A=[a=r(),b=r(),c=r(),d=r(),e=r(),PI-a-b-c-d-e])
d=60
stroke(W*a,w-t*e,w*c)
for(T=0;T<P;T+=P/47,line(x,y,w,w))for(i=1,x=y=w;i<A.length;i++)
line(x,y,x+=d*cos(U=A[i]+T),y+=d*sin(U))
t=++t%w}