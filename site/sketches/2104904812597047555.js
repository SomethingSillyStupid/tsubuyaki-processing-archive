t=0
$=[]
draw=_=>{t++||createCanvas(W=720,W)
background(0,9)
noFill()
$[t%W]={x:cos(T=t/9)*250+360,y:sin(T)*250+360,d:noise(sin(T),t/W)*19,t:1}
$.map(p=>stroke(W,sin(A=p.t++/W*PI)*99)+arc(p.x+=cos(p.d)/7,p.y+=sin(p.d)/7,S=sin(A*9)**2*4+4,S,p.d-2,p.d+2))};