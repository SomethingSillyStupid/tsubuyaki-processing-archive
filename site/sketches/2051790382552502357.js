//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{frameRate(2)
createCanvas(W=(w=200)*2,W)
noStroke()
colorMode(HSB)
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
T=[],shuffle([0,1,2,3]).map(i=>T.push(...[[x,y],[x+d,y+d],[x+d,y],[x,y+d]][i])),fill(shuffle(T.slice(-4))),quad(...T)
t++}