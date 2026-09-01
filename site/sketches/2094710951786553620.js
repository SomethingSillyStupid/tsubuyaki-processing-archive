//#つぶやきProcessing #p5js
t=0,C=[]
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)
M=x=>int(x/9)*9
for(R=0;R<W;R+=9)for(T=0;T<TAU;T+=.1)x=M((Q=R+91*abs(sin(T+t/W)))*cos(U=T+t%W/Q)+w),y=M(Q*sin(U)+w),!C[x]?C[x]=[]:0,fill(!C[x][y]?C[x][y]=[r(w),r(w),r(w)]:C[x][y]),
rect(x,y,9)
++t}