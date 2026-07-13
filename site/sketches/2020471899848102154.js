//#つぶやきProcessing #p5js
t=0,d=20
draw=_=>{
createCanvas(W=(w=200)*2,W)
background(0)
strokeWeight(4)
stroke('ivory')
for(y=0;y<=W;y+=d*2/3)
for(x=0;x<W;x+=d/5)
point(x,y+(int(x/d)%2?-x%d:x%d))
++t}