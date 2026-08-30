//#つぶやきProcessing #p5js
t=0,C=[]
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+noStroke()
colorMode(HSB)
for(x=0;x<W;x+=9)for(y=0;y<W;y+=9)!C[x]?C[x]=[]:0,fill(!C[x][y]?C[x][y]=[r(180,230),r(99),w]:C[x][y]),M=mag(x-w,y-w)*sin(t/w)/w,rect(x+9*cos(U=M+t/71),y+9*sin(U),6)}