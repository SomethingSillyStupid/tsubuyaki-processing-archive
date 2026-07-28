//WIP #つぶやきProcessing #p5js
t=0,P=[]
draw=_=>{createCanvas(W=(w=200)*2,W)
r=random
P.push([r(W),r(W)])
D=(i,j,I)=>(P[i][I]-P[j][I])/dist(...P[i],...P[j])
E=I=>D(i-1,i,I)+D(i+1,i,I)
for(i=1;i<t;i++)M=mag(...(B=P[i]))*13,B[1]+=E(1)-B[0]/M,B[0]+=B[1]/M+E(0),rect(...B,3)
++t}