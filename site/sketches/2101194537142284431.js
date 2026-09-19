//Still WIP #つぶやきProcessing #p5js
t=0,d=20
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(7)
F=x=>(x<0?-1:1)*(abs(x))
for(x=0;x<8*W;x+=d)for(y=0;y<8*W;y+=d)
stroke((x*y+t)%360,w,w),
point((w*sin((x+y+t)/199))+w,(w/tan((x-y+t)/w))+w)
++t}