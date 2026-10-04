//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noFill()
strokeWeight(d*2)
for(x=-w;x<w;x+=d)for(y=-w;y<w;y+=d)
stroke(360-abs(R=abs(1-W/y)*7),w,w),
point((Q=R^abs((w-w/x)*cos(t/w)))*cos(T=Q/w+w/x*PI)+w,Q*sin(T)+w)
++t}