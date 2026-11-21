t=0
draw=_=>{colorMode(HSB)
background(F=5,t++?.1:!createCanvas(W=720,W)+W)
filter(BLUR)
noStroke()
for(r=0;r<TAU+!(F=-F);r+=PI/6)for(d=0;d<360;d++)fill(r*54,S=sin(d/9-t/9)**2*60+30,129-S)+circle(cos(R=r+noise(d/W-t/W)*F)*d+360,sin(R)*d+360,sin(d/19)**3*19)}