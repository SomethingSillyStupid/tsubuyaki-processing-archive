//#つぶやきProcessing #p5js
t=0,d=19
draw=_=>{r=random
P=x=>(int(x+r(W/d))*d)%W
t||createCanvas(W=(w=200)*2,W)+noStroke(x=P(w),y=P(w))+fill(w,0,w)+circle(w,w,d)
blendMode(r([DODGE,EXCLUSION]))
copy(x,y,d,d,x=P(x),y=P(y),d,d)
++t}