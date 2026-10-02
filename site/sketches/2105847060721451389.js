//WIP #つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(d*2)
for(x=-w;x<w;x+=d)for(y=-w;y<w;y+=d)
stroke(abs(R=log(abs((1-1/y)))*W+71*sin(t/77))*2,w,w),
point(R*cos(T=w*(1-1/x)*PI)+w,R*sin(T)+w)
++t}