//#つぶやきProcessing #p5js
t=0
draw=_=>{a=abs
t||createCanvas(W=(w=200)*2,W)
strokeWeight(4)
for(x=0;x<W;x+=4)
for(y=0;y<W;y+=4)
a(((X=a(x-w))*X+(Y=a(y-w))*Y)-(U=y*t))<50?(stroke(A=W-U/66,X*Y/A*99,U/91),point(x,y)):0
t=++t%W}