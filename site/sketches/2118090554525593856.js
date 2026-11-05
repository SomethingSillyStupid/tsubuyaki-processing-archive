//#つぶやきProcessing #p5js
t=0
draw=(n=5)=>{
if(!n)return
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+strokeWeight(n*96)
for(T=0;T<TAU;T+=.3)for(R=1;R<w;R+=19)C=abs(cos(R+T*n)),S=abs(sin(R-T*n)),stroke(((C+S)*w)%360,w,w,.01),point(R*cos(t/R+C)+w,R*sin(t/R+S)+w)
draw(n-1)
++t}