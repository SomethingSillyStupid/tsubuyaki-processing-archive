setup=_=>{createCanvas(W=720,W)
background(0)
loadPixels()
P=pixels
F=a=>tan(noise(x/9,y/9,a/9)*9)*W*((int(x/90)+(y/99))%2)
for(y=0;y<W;y++)for(x=0;x<W;x++)P[I=y*W*4+x*4]=F(0),P[I+1]=F(1),P[I+2]=F(2)
updatePixels()}