//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
for(i=20;i>0;i--)
fill(((i+t/91)*30)%360,w,w),
circle(w,W-2**i,2**i*2)
++t}