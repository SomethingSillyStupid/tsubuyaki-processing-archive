t=0
$=[]
draw=_=>{background(0,t?9:!createCanvas(W=720,W)+W)
filter(BLUR)
noFill()
R=random
for(i=9;i--;)$[t++%W]={x:340+R(40),y:noise(t/W/i,i)*W*2-W/2,t:1,d:R(1)>.5?1:-1}
$.map(p=>stroke(W,99)+circle(p.x+=(p.t*=1.04)*p.d,p.y+=R(2)-1,p.t**2))}