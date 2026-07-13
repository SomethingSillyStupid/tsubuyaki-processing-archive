//#つぶやきProcessing #p5js
t=0,d=8
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+(A=r(9))
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
strokeWeight(r(d*2)),
u=(3*x-A*y+1)%W,
v=(A*x+2*y-3)%W,
G=get(x,y),
stroke((t*x)/G[0],(w*y)/G[1],(x*y)/G[2]),
point(u,v)
t=++t%w}