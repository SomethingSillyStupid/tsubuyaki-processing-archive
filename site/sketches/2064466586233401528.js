t=0
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke()
for(R=0,T=3;R<abs(w*sin(t/w));R+=.1)
fill(abs(R*t/w)%255,w,w,.8),
circle(x=R*cos(U=R/T)+w,y=R*sin(U)+w,min(x,y,W-x,W-y)/2)
++t}
