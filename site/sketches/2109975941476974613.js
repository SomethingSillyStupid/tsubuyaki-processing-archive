//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+strokeWeight(18)
t++%W||(P=[[w,W,t]])
P.map(B=>(stroke(9,G=(t-B[2]/2)%W,W-G,50),point(B[0]+=r(D=9*sin(B[0]*B[1])),B[1]+=r(-abs(D/3))),r()<.02?P.push([B[0],B[1],t]):0))}