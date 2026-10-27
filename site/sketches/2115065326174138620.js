// 乱数まかせ #つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+noStroke(P=[[w,W,0]])
U=(B,d)=>r()<.53?P.push([B[0]+d,B[1]-r(9),0]):0
P.map(B=>(fill(B[2]+t,W-t,0),rect(B[0],B[1],8),(!B[2]++&&t<90)?(U(B,-9),U(B,9)):0))
t=++t%w}