t=0
draw=_=>{t++||createCanvas(W=(w=200)*2,W)+noFill(x=y=h=.2,P=[])+colorMode(HSB)
P.push(x+=h*(cos(t*y)-x/8),y+=h*(sin(t*x)-y/8))
t>4?(stroke((99/abs(P[t-1]))%360,w,w,.6),strokeWeight(P[t-2]*9),bezier(...P.slice(-8).map(x=>x*w+w))):0
t>99?P.shift():0}
