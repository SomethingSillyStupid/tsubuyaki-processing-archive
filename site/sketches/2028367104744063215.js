//#つぶやきProcessing #p5js
t=0,d=96,W=400
draw=_=>{
t||createCanvas(W,W)+colorMode(HSB)
t++%W||(L=random(9))
for(x=0;x<W;x+=d)
for(y=0,blendMode([DODGE,BURN][t%2]);y<W;y+=d)
stroke((T=t%W+L)+(D=d*cos(y-L*T))+(E=d*sin(x+T/L))%255,W,W,.3),
strokeWeight((D+E)/9),
point(x+D,y-E)}