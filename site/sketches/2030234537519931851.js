//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+noFill(P=[],x=y=w,k=r(w))
C=cos(K=k+t/91),S=sin(K)
P.push(...[x,y]=[(C*x+S*y)%w+w,-((S+C*k)*x+(C+S*k)*y)%w+w])
P.length>7?(stroke(x,y,(x*S+y*C)%W),
bezier(...P),P.shift(),P.shift()):0
t=++t%W}