//#つぶやきProcessing #p5js
t=0,d=19
draw=_=>{r=random
P=x=>(int(x+r(W/d))*d)%W
t||createCanvas(W=(w=200)*2,W)+noStroke(x=P(w),y=P(w))+fill(w,w,w)+rect(w,w,d)
blendMode(r([ADD,EXCLUSION]))
fill(get(x,y).map(x=>x*r(.9,5)))
rect(x=P(x),y=P(y),r(d*2))
++t}