//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+strokeWeight(29)+blendMode(DODGE)
t++%w||(p=q=w,T=r(99,w))
C=(R,x,n=9)=>n<1?0:(R+C(R*.9,x,n-1))*sin(x*n)
stroke(R=C(W,U=t/T)%W,w,w,.1)
line(p,q,p=C(R,R+U)+w,q=C(R,(R+U)-1.6)+w)}