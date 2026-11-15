t=0
setup=_=>{t++||createCanvas(W=720,W)+background(0)
for(y=0;y<W;y++)for(x=0;x<W;x++)(d=int(dist(x,y,360,360)/60))+set(x,y,!(x%2||y%2)?0:!(x%d&&y%d)?((x%(N=int(noise(int((x-360)/6)/32,int((y-360)/6)/32)*160%4)))^(y%N))?N*96:0:0)
updatePixels()}