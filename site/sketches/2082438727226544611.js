t=0
$=[]
draw=_=>{background(0,t?9:!createCanvas(W=720,W)+W)
noStroke()
filter(BLUR,i=9)
R=random
while(i--)$[t++%(W*9)]={x:R(W),y:R(W),t:2,i:t}
$.map(p=>fill(W-p.t*300)+circle(p.x+=cos(N=noise(p.x/99,p.y/99,p.i/W)*20)*(S=p.t**3),p.y+=sin(N)*S,(p.t*=.99)*3))}