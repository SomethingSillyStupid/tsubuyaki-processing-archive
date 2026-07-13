//#つぶやきProcessing #p5js
t=0,d=6
draw=_=>{r=random
frameRate(1)
createCanvas(W=(w=200)*2,W)
t++%3||(I=int(random(3)))
for(R=1;R<w;R+=d)
for(T=0,G=r(d);T<TAU;T+=3/R)
strokeWeight(G<0?G=r(d*2):G-=.1),
stroke([g=G*25,R,W-g].map((_,i,a)=>a[(i+I)%3])),
point(R*cos(T)+w,R*sin(T)+w)}