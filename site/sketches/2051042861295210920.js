//今朝の東京 #つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)*noStroke()
t<99?P.push([r(w),r(7)]):0
https://t.co/zuB9SSxcnY(B=>(circle((R=B[0]+=r(2)*sin(U=t/w))*cos(T=B[1]+=r(.02)*cos(U))+w,R*sin(T)+w,W),fill(180+R/T,W,W,.01)))
t++}