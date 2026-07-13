//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB,1)+(d=int(r(6,19)),l=r(9))+strokeWeight(d)
for(b=0;b<W;b+=d)for(c=0;c<W;c+=d)abs((A=t*cos(b-d)**t)-t*cos(c-d)**t)<l?(stroke((abs(A/9)+.3)%1,1,1),point(b,c)):0
t=++t%w}