//#つぶやきProcessing #p5js
t=0,x=y=a=b=C=0
draw=_=>{r=random
t++%90||createCanvas(W=(w=200)*2,W)+fill(0)+textSize(470)+text(['W','🐧'][int(r(2))],0,W)
M=t%2?(x=r(W),y=r(W),a=r(W)-x,b=r(W)-y,C=['red','cyan','gold'][int(r(3))],OVERLAY):EXCLUSION
blendMode(M)
fill(C)
rect(x,y,a,b)}