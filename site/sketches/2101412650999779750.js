//Still WIP #つぶやきProcessing #p5js
t=0,d=29
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(8)
for(x=0;x<8*W;x+=d)for(y=0;y<8*W;y+=d)
stroke((x*y+t)%360,w,w),
point((w*Math.cosh(sin(x+y+t/w)*2)-w),(w*Math.tanh(23*cos(x-y+t/w)))+w)
++t}