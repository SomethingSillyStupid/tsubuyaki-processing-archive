//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noFill()
strokeWeight(d)
for(x=0;x<W;x+=d)for(y=-w;y<w;y+=d)
stroke(R=sin(log(abs(x^w))+t/w)*w,w,w),
point(R%w*cos(T=R/w+w/y*TAU)+w,R%w*sin(T)+w)
++t}