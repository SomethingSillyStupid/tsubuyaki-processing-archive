//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
t||noStroke(P=[],C=r([0,99,w]))
for(x=0;x<W;x+=8)for(y=0,!P[x]?B=P[x]=[]:0;y<W;y+=8)!B[y]?B[y]=r(40):0,T=atan2(y-w,x-w),
fill(w-C,C,W*sin(x^y),50),
circle(x+9*cos(V=T+t/71),y+9*sin(V),P[x][y])
t=++t%W}