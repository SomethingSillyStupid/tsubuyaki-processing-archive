//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(P=[])
noFill()
strokeWeight(3)
P.push([r(W),r(W),r(w),r(255),t])
https://t.co/zuB9SSxcnY(([x,y,R,c,T])=>(stroke(c,w,w,(M=min(R,(t-T)))/R),circle(x,y,R-M)))
t=++t%800}