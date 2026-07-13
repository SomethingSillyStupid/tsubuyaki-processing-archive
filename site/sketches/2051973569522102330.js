//#つぶやきProcessing #p5js
t=0,N=20
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
t||(P=[],S=W/N)
for(i=0;i<N;i++)for(j=0,P[i]=[];j<N;j++)fill(t<S/2?(!P[i][j]?P[i][j]=[r(255),W,W]:P[i][j]):w),rect(x=i*S+t,y=j*S,S/2-(t+i*j)%S,S)
t=++t%S
}