//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(u=0;u<w;u+=2)
for(R=0,B=[u,u];R<W;R+=4)point(...B.map((x,i)=>(stroke(R,x%w,(u*x)%w,w),strokeWeight((R/u-x)%w),R*cos((x-t/w+R*u)+i*1.6)+w)))
++t}