//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
g=createGraphics(W,W).textSize(W).text('❤',10,380)
fill('pink')
for(x=0;x<W;x+=9)
for(y=0;y<W;y+=9)
g.get(x,y)[3]?text('❤',x,y):0
t++}