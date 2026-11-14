//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**n
for(u=0;u<w;u+=4)
for(R=0,B=[u,u];R<W;R+=4)point(...B.map((x,i)=>(stroke(x%w,R,(u*22)%w),strokeWeight((R-u)%x),R*P(cos((x+u/R)+i*1.6),(34-min(33,t/9)))+w)))
t=++t%W}