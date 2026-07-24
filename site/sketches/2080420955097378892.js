//#つぶやきProcessing #p5js
setup=_=>{r=random
createCanvas(W=(w=200)*2,W)
noStroke()
for(i=0;i<40;i++)fill(r(['red','blue','yellow'])),rect(r(W),r(W),r(w))}
draw=_=>{for(x=0;x<W;x++)for(y=0;y<W;y++)c=get(x,y),d=get(X=x+r(-2,2),Y=y+r(-1,8)),stroke(c),strokeWeight(1.2),point(X,Y)}