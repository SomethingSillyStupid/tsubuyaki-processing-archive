//#つぶやきProcessing #p5js
t=0
draw=_=>{r=_=>random(-6,6)
t++||createCanvas(W=(w=x=y=200)*2,W)
strokeWeight(4)
point(x,y)
for(i=0;i<9&&get(x1=x+r(),y1=y+r())[3];i++);
x=x1%W,y=y1%W}