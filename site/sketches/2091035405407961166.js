//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
background(0,9)
t<W?P.push([r(W),r(W)]):0
P.map((B,i)=>(fill(0,W,w,w),C=P[(i+1)%P.length],circle(B[0]-=r(B[0]-C[0])/(M=dist(B[0],C[0],B[1],C[1])),B[1]-=r(B[1]-C[1])/M,9)))}