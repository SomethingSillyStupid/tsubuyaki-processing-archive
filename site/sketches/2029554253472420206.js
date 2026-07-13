t=0
$=[]
draw=_=>{t||createCanvas(W=720,W,WEBGL)+background(W)
colorMode(HSB)
filter(t%3?BLUR:DILATE,2)
blendMode(SUBTRACT)
$[t++%W]={c:t%360,x:0,y:0,i:t}
$.map(p=>fill(p.c,80,W,.05)+circle(p.x+=cos(A=noise(p.x/360,p.y/360,t/W+p.i/W)*30)*3,p.y+=sin(A)*3,9))}