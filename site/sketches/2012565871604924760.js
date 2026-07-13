A=[f=0]
setup=_=>{createCanvas(w=400,w)
R=random
for(b=0;b<9;b++)for(i=0;i<25;)A.push({c:b*50+25,o:i++-25,v:R(.5,1),t:R(PI*b/4)})}
draw=_=>{for(p of A){stroke(p.v*255)
point(p.c+p.o*cos(p.v*f*.05+p.t),p.v*f)}f++}