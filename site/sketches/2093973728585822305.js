//#つぶやきProcessing #p5js
t=0,d=20,C=[]
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)+noStroke()
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
!C[x]?C[x]=[]:0,
fill(!C[x][y]?C[x][y]=[r(W),r(w),r(w)]:C[x][y]),
M=mag(X=x-w,Y=y-w),
T=atan2(Y,X),
rect(x+d*cos(U=T+t/41),y+d*sin(U),d/2)
}