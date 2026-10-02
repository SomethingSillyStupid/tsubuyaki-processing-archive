//脱線 #つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
noFill()
strokeWeight(d*2)
for(x=-w;x<w;x+=d)for(y=-w;y<w;y+=d)
stroke(abs(R=log(w-w/y)+71*sin(t/77))*3,w,w),
point(R*cos(T=log(w-w/x)*TAU)+w,R*sin(T)+w)
circle(w,w,R*3)
++t}