t=0
$=[]
draw=_=>{t++||createCanvas(W=720,W)
background(0,9)
noFill()
N=noise
$[t%W]={x:random(W),y:random(W),t:0,i:t}
$.map(p=>stroke(W,p.t/9)+arc(p.x+=cos(A=N(p.x/99,p.y/99,p.i/W)*19)/7,p.y+=sin(A)/7,S=sin(p.t++/69)**2*4+4,S,A-S/4,A+S/4)+circle(p.x,p.y,1))}