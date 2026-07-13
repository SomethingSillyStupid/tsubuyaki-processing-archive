//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+(p=q=w,U=0)
L=(a,b,c,d)=>line(0,-(A=(d-b)/(c-a))*a+b,W,A*(W-a)+b)
for(T=R=0;T<TAU;T+=.8)
stroke(U=(U+sin(t/W))%w,p*(T+U)%w,(R*T-U)%w),
L(p,q,p=(R=(w*cos(t/W))%w)%w*cos(S=T+U/7)+w,q=R%w*sin(S)+w)}