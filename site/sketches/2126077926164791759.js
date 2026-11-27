//#つぶやきProcessing #p5js
t=0,d=40
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(20)
blendMode(EXCLUSION)
colorMode(HSB)
for(x=0;x<W;x+=d)
for(y=j=0;y<W;y++,j++)
stroke((x+y+t)%360,w,w),
point(x+d*abs(sin((x+y)/d/2+1.6*(j%2?-2:3))),y)
++t}