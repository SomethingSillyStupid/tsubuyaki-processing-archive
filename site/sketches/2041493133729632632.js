t=0
$=[]
draw=_=>{t++||createCanvas(W=720,W,WEBGL)
colorMode(HSB)
background(W)
blendMode(SUBTRACT)
$[T=t%W]={x:0,y:0,r:t/9,s:1}
$.map(p=>circle(p.x+=asin(cos(R=p.r))*(S=(noise(R/99,t/9)-.3)**4*W),p.y+=asin(sin(R))*S,(1-p.s)*40,fill(R*9%360,80,W,p.s*=.992)))}