//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
noLoop()
t++||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(3)
f=(x,y,n)=>n<1?0:(point(x,y),f(x+7,y,n-1),f(x,y+7,n-1))
for(x=0;x<W;x+=29)
for(y=0;y<W;y+=29)
f(x,y,10)
}