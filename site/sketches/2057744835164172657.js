//#つぶやきProcessing #p5js
t=0,d=4,e=1e-4
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB,e)
s=x=>!x?1:abs(sin(x)/x)
strokeWeight(d)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
stroke(s((s(t/w)+w-x))*s((s(t/w-1.6)+w-y))%(3*e),w,w),
point(x,y)
++t}