//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
D=(T,C)=>(stroke(C),rect(R*P(cos(T),U)+w,R*P(sin(T),U)+w,2))
U=2*sin(t/w)
for(x=0;x<W;x+=5)for(y=0;y<W;y+=5)
R=mag(X=x-w,Y=y-w),
T=atan2(Y,X),
D(T-x-U,'lime'),D(T+y-U,'blue')
++t}