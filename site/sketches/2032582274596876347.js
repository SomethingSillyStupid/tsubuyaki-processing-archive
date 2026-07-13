//#つぶやきProcessing #p5js
T='Happy White Day'
draw=_=>{
createCanvas(W=(w=200)*2,W)
g=createGraphics(W,W).textSize(W).text('❤',10,380)
fill('cyan')
for(x=0;x<W;x+=19)
for(y=0;y<W;y+=19)
textSize((x*y+1)%37),
g.get(x,y)[3]?text('❤',x,y):0
fill(w)
textSize(40)
text(T,50,w)}