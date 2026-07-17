//WIP #つぶやきProcessing #p5js
t=0,N=40,d=400/N,P=new Array(N).fill(0)
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(6)
for(i=1;i<N-1;i++)
P[i]+=3*sin(i/N*PI)**2*sin(t/31)+(P[i-1]-P[i])/dist((i-1)*d,0,i*d,P[i])+(P[i+1]-P[i])/dist((i+1)*d,0,i*d,P[i]),
point(i*d,P[i])
++t}