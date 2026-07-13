t=0
$=[]
draw=_=>{t||createCanvas(W=720,W,WEBGL)+background(W)
colorMode(HSB)
blendMode(SUBTRACT)
filter(t%3?DILATE:BLUR)
for(i=4;i--;)$[T=t++%W]={x:t%W-360,y:-360,g:0,c:T/2}
$.map(p=>fill(p.c,80,W,.1)+circle(p.x,p.y+=(p.g+=noise(p.x/99,p.y/99,t/W)**4),5))}