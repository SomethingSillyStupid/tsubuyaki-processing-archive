//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>
{r=random
t||createCanvas(W=(w=200)*2,W)+(F=r(W))
for(y=0,p=w;y<W;y+=d,p=y)
stroke(shuffle([r(T=t%W),r(y),r(F-T)])),
strokeWeight(r(d)),
mag(T-w,y-w)<w?line(T+d*sin(p*F+t),p,T+(D=d*cos(y*F-t)),y+D):0
t=(t+=d)%(W*9)}