//#つぶやきProcessing #p5js
t=0,d=20,C=[]
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
I=x=>int(x/10)*10
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
!C[x]?C[x]=[]:0,
fill(!C[x][y]?C[x][y]=[r(w),r(w),r(w)]:C[x][y]),
M=mag(x-w,y-w),
rect(x+I(M*cos(U=M+t/w)),y+I(M*sin(U)),d)
}