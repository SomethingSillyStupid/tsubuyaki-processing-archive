//#つぶやきProcessing #p5js
t=0,d=26
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
F=x=>(x<0?-37:37)*sqrt(abs(x))
strokeWeight(8)
for(x=-7*W;x<7*W;x+=d)for(y=-7*W;y<7*W;y+=d)
stroke((y+x+t)%360,w,w),
point(F(99*sin(x-y+t/W))+w,F(99*sin(x+y+t/W))+w)
++t}