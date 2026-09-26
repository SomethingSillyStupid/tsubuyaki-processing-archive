//少し早いが  #つぶやきProcessing #p5js
t=0
draw=_=>{createCanvas(W=(w=200)*2,W)
g=createGraphics(W,W)
g.textSize(W).text("🎃",-75,300)
textSize(12)
for(x=0;x<W;x+=4)for(y=0;y<W;y+=4)red(g.get(x,y))>t&&x%6==0&&y%6==0?text('🎃',x,y):0
t>w?(textSize(80),text('🎃',150,t)):0
t=++t%W}