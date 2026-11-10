//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
P=(x,n)=>(x<0?-1:1)*abs(x)**(1/n)
for(u=0;u<w;u+=4)
for(R=0,B=[u,u];R<W;R+=4)point(...B.map((x,i)=>(stroke((u*22)%w,x%w,R),strokeWeight(R/x),R*P(cos((x-R/u)+i*1.6+t/W),.7)+w)))
++t}