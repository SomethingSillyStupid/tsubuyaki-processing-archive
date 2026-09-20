//Still WIP #つぶやきProcessing #p5js
t=0,d=43
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(8)
for(x=0;x<16*W;x+=d)for(y=0;y<16*W;y+=d)
stroke((y+t*d)%360,w,w),
point((W*Math.cosh(sin(x+y+t/1e3)*2)-W),w*sin(tan(x-y-t/1e3))+w)
++t}