//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(r=0;r<w;r+=7)
for(T=0,e=t%W/W;T<TAU;T+=.05)
stroke(X=(R=r*(C=1-e*cos(T)))*cos(U=t/71+T)+w,Y=R*sin(U)+w,Z=(Q=r*e/C*sin(T))*cos(U),9),
strokeWeight(Z*8),
point(X,Y),
point(Z*w,Q*sin(U)+w)
t++}