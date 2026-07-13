//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)+strokeWeight(9)
background(9,1)
T=(t%W+1)/w
C=(p,x)=>R*cos(p)+x
for(p=0;p<TAU;p+=.01)R=w*cos(5-acos(cos((T=t/W+1)+(P=p+T)))*(T*3)%11),
point(X=C(P,w),Y=C(P-1.6,w)),stroke(p<3?w:R,p>3?w:R,R*sin(p),w)
++t}