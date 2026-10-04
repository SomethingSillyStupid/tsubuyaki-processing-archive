//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noFill()
strokeWeight(d*2)
for(x=-w;x<w;x+=d)for(y=-w;y<w;y+=d)
stroke(abs(R=abs(1-w/y)*7*sin(t/77)),w,w),
point((Q=R^abs(x-w))*cos(T=R/w+w/x*PI)+w,Q*sin(T)+w)
++t}