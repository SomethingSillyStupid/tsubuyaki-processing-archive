//#つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
P.push([r(W),r(W),r(W)])
P.map(B=>(stroke(...B,9),point(B[0]+=(t%2?-1:1)*r(Y=w-B[1])/r(D=mag(X=B[0]-w,Y)),B[1]-=r(X)/D),strokeWeight(B[2]/B[1])))
t>W?P.shift():0}