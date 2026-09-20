//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
D=F=>point(R*P(cos(T),U=F?1:4*sin(t/71)**2)+w,R*P(sin(T),U)+w)
strokeWeight(4)
stroke(0,0,w)
for(x=0;x<W;x+=8)for(y=0;y<W;y+=8)R=mag(X=x-w,Y=y-w),T=atan2(Y,X),D(0),D(1)
++t}