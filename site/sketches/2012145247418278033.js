//#genuary Order/Disorder #つぶやきProcessing #p5js
t=0,d=8
draw=_=>{createCanvas(W=(w=200)*2,W)+strokeWeight(3)
for(x=0;x<W;x+=d)for(y=0;y<W;y+=d/4)stroke('magenta'),point(X=x+d*cos(y/55-x/34+t/91),Y=y+d*sin(x/55+y/34+t/39)),stroke('cyan'),point(Y+d*sin(x),X+d*cos(Y))
t=++t%W}