//#つぶやきProcessing #p5js
t=0
draw=_=>{s=sin,c=cos
createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-R:R)*abs(x)**n+w
for(x=0;x<W;x+=9)for(y=0;y<W;y+=9)for(i=0;i<9;i++)stroke(R=W*atan(x+(T=(t-i)/w))%(w-t),Q=w*c(U=x+y+T),w*s(U)),strokeWeight(Q/9),point(P(c(V=Q*U),i),P(s(V),1/i))
++t}