//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)
noFill()
P.push([r(W),r(W),r(w),r(30),t])
https://t.co/zuB9SSxcnY(([x,y,R,c,T])=>(stroke(180+c,M=min(R,t-T),W,M/R),circle(x,y,M)))
t>w?P.shift():0}