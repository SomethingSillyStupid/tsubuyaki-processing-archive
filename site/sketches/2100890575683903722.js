//WIP #つぶやきProcessing #p5js
t=0,d=20
draw=_=>{createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(6)
for(x=0;x<8*W;x+=d)for(y=0;y<8*W;y+=d)
stroke((x*y)%360,w,w),
point(w*sin((x-y)/W+t/w)+w,w*cos((x+y)/W+t/w)+w)
++t}