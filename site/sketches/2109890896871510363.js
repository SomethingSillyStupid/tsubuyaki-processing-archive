//造山運動 #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+strokeWeight(8)+(P=[[w,W,t]])
P.map(B=>(stroke(9,G=abs(W-B[2]),abs(G-99)),point(B[0]+=r(D=-B[1]/W*22,-D),B[1]+=r(-1)),r()<.02?P.push([B[0],B[1],t]):0))
t=++t%700}