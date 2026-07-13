//一昔前の未来 #つぶやきProcessing #p5js
t=0
draw=_=>{a=abs
createCanvas(W=(w=200)*2,W)
background(0)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
colorMode(HSB)
for(R=1;R<w;R+=9)for(T=0;T<TAU;T+=.01)rect(R*P(cos(T),cos(U=R+t/71))+w,R*P(sin(T),sin(U))+w,8),stroke(P(R,w*sin(t/W))%360,w,w)
++t}