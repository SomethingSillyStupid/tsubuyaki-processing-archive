//#つぶやきProcessing #p5js
t=0
draw=_=>{s=sin,c=cos
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
P=(x,n=17)=>n<1?0:s(x*(N=n*2-1))/N+P(x,n-1)
for(R=0;R<w;R+=9)for(T=0;T<81;T+=.1)stroke(P(R+t)*w,w,w),point(R*((C=P(U=R*T))*c(V=R+t/w)-(S=P(U-1.6))*s(V))+w,R*(C*s(V)+S*c(V))+w)
++t}