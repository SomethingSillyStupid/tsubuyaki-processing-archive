//#つぶやきProcessing #p5js
t=0
draw=_=>
{r=random
t++||createCanvas(W=(w=200)*2,W)+noStroke(R=0,T=0)
C=t=>R*cos(t)+w
for(i=0,P=[];i<4;i++)
P.push(C((R=((R+r(60))*sin(t)),T+=r())),C(T-1.6))
fill(shuffle(P))
quad(...P)
}