//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
D=(T,C)=>(stroke(C),rect(R*P(cos(T),U=2*sin(t/17))+w,R*P(sin(T),U)+w,2))
for(x=0;x<W;x+=5)for(y=0;y<W;y+=5)
R=mag(X=x-w,Y=y-w),
T=atan2(Y,X),
D(T,'lime'),D(T+t/17,'blue')
++t}