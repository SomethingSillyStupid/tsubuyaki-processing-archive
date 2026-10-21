//#つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
for(c=.1;c<2;c+=.2)for(d=.1;d<3;d+=.3)for(T=0;T<TAU;T+=1/w)point(X=w*P(cos(T-t/9),c)+w,Y=w*P(sin(T),d)+w),stroke(abs((c*d*w)*cos(T))%360,w,w)
++t}