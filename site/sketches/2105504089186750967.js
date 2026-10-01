//Angine de Poitrine #つぶやきProcessing #p5js
t=0
draw=_=>{
r=_=>randomGaussian(0,.01)*66
frameRate(5)
createCanvas(W=(w=200)*2,W)
background('pink')
strokeWeight(8)
for(x=0;x<W;x+=16)for(y=0;y<W;y+=16)
point(x+(int(y/16)%2?8:0)+r(),y+r())
++t}