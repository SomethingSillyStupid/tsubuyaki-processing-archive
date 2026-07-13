t=F=0
draw=_=>{background(0,t++?9:!createCanvas(W=720,W)+W)
filter(BLUR)
for(y=0;y<W;y+=119)for(x=-30;x<764;x+=3)stroke(F++%9*W,99)+line(x+cos(A=noise(x/W-t/W,y)*9+y/9+x/180+t/99)*15,y+sin(A)*30+(Y=sin(x/99-t/79+noise(y+t/W)*9)*40),x-cos(A)*15,y-sin(A)*30+Y)}