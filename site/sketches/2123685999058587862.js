//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
for(u=0;u<w;u+=2)
for(R=0,B=[u,u];R<W;R+=4)point(...B.map((x,i)=>(stroke(R,(u*x)%w,x%w),strokeWeight((R-x)%u),R*cos((x^t/w+u/R)+i*1.6)+w)))
++t}