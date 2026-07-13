setup=_=>{createCanvas(W=720,W)
background(0)
loadPixels()
P=pixels
for(y=0;y<W;y++)for(x=0;x<W;x++)v=tan(y/25|x/25|(noise(y/15,x/15)*9)&(x|y))*W*sin(x/30)/2*sin(y/30)/2,P[I=y*W*4+x*4]=P[I+1]=P[I+2]=v
updatePixels()}