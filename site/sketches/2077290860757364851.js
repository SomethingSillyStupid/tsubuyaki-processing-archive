//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB,100)
for(y=0;y<W;y++)
for(x=0;x<W;x++)
stroke(60-y/20,100-y/20,w),
R=random()*sin(x/(4+y/69)+cos(y/19*t-x/44)),
R<-.7?stroke(49):R>.4?stroke(W):0,
point(x,y)
++t}