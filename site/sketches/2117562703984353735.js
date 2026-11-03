//#つぶやきProcessing #p5js
t=0,w=300,N=600
draw=_=>{
r=random
U=j=>P[i][j]-=57*(P[i][j]-w)/w
C=T=>(w+r(-40,40))*cos(T)+w
S=i=>i>N?0:(P.push([C(T=i/N*TAU+r(.1)),C(T-1.6)]),S(i+1))
t||createCanvas(W=w*2,W)+(P=[],S(0))
for(i=1,Q=P[0];i<N;i++)U(0),U(1),line(...Q,...Q=P[i])
t=++t%33}