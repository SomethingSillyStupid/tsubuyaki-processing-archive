//#つぶやきProcessing #p5js
t=0,C=[],d=40
draw=_=>{r=random
createCanvas(W=(w=200)*2,W)
if(!t++)for(x=0;x<=W;x+=d)for(y=0,C[x]=[];y<=W;y+=d)C[x][y]=[r(W),r(W),r(W)]
M=x=>int(x/d)*d
for(R=0;R<w;R+=9)for(T=0;T<TAU;T+=.1)fill(C[M(X=R*cos(U=T+t/w)+w)][M(Y=R*sin(U)+w)]),circle(X,Y,9)}