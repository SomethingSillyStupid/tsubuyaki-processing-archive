//#つぶやきProcessing #p5js
t=0,d=50
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+(x=y=w,c=0)
g=createGraphics(W,W)
g.textSize(W).text('A',100,380)
X=x+r(-d,d),Y=y+r(-d,d)
g.get(X,Y)[3]?line(x,y,x=X,y=Y):c++}