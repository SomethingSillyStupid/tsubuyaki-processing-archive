//#つぶやきProcessing #p5js
t=0,w=200
draw=_=>{
r=random
t++%w||createCanvas(W=w*2,W)+colorMode(HSB)+(B=r(255)),N=r(-9,9)
strokeWeight(4)
for(T=0;T<TAU;T+=.01)
R=(abs(w*cos(T))**N+abs(w*sin(T))**N)**(1/N),
stroke(((R*N*T)%90+B)%255,w,w,.3),
point(R*cos(U=R/9/N+T)+w,R*sin(U)+w)
}