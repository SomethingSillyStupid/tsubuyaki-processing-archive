//Still WIP #つぶやきProcessing #p5js
t=0,d=29
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
background(0,1)
colorMode(HSB)
strokeWeight(8)
for(x=0;x<8*W;x+=d)for(y=0;y<8*W;y+=d)
stroke((x*t/w+y)%360,w,W,.6),
point(w*tan(sin(x+y+t/w))+w,w*tan(3*cos(x-y+t/w))+w)
++t}