//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)
fill(W,3)
circle(w,w,w)
for(x=0;x<W;x++)
(r()<.9)?(stroke(R=(r()+(T=t%491))%W,G=(r(99)+t)%W,r(W)),
y=T+(r()>.2?r(-40,5):r(-1,20)),
point(x,t%800>W?y-W:y)):0
}