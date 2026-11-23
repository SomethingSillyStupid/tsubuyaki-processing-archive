//#つぶやきProcessing #p5js
P=[[w=200,w,w]]
draw=_=>{
r=random
createCanvas(W=w*2,W)
background(0)
strokeWeight(18)
P.map(B=>(stroke(9,B[2],w,w),point(B[0]+=r(-2,2),B[1]+=r(-3,3)),r()<.01?P.push(B.map(x=>x+r(-5,5))):0))
P.length>20?P.shift():0}