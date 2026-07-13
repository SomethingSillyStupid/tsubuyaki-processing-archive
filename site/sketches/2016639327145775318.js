//#つぶやきProcessing #p5js
t=0
draw=_=>{a=abs
t||createCanvas(W=(w=200)*2,W)
strokeWeight(4)
for(x=0;x<W;x+=4)
for(y=0;y<W;y+=4)
a(((X=a(x-w))*X-(Y=a(y-w))*Y+2*X*Y)-(U=(y*t)))<W*sin(x*y+t)?(stroke(A=W-U/66,X*Y/A*55,U/91),point(x,y)):0
t=++t%W}