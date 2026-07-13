//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+stroke('cyan')+point(w,w)
for(x=0;x<W;x++)
for(y=0;y<W;y++)
u=((S=sin(t))*x-(C=cos(-t))*y+w)%W,
v=(-C*x+S*y+w)%W,
stroke(get(x,y).map(x=>x*random(-w,w))),
point(u,v)
}