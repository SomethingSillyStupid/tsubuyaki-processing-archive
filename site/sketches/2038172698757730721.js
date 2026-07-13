//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
t++||createCanvas(W=(w=200)*2,W)
background(99,w,W,2)
for(R=0,P=r(50),X=r(W),Y=r(W);R<P;R++)
for(T=0;T<TAU;T+=.02)
stroke(W,w,(Q=R+(R*.75+R/2*cos(T*41))*sin(-T*5))*12),
point(Q*cos(U=T+t/7)+X,Q*sin(U)+Y)
}