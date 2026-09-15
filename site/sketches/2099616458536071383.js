//#つぶやきProcessing #p5js
t=0,d=40
draw=_=>{frameRate(1)
createCanvas(W=(w=200)*2,W)
strokeWeight(23)
for(y=0;y<W;y+=d)
for(x=0;x<W;x+=d)
[D,E]=random([[0,0],[0,0],[0,0],[d,d],[d,-d]]),
stroke('orange'),
line(X=x+d/2,Y=y+d/2,X+D,Y+E),
stroke('blue'),
point(X,Y)
++t}