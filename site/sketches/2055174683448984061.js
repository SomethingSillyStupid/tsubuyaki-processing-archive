//#つぶやきProcessing #p5js
t=0,N=60
draw=_=>{createCanvas(W=(w=200)*2,W)
t||(t=5,P=[2,3],X=Y=w)
stroke('blue')
P.reduce((a,c)=>a&&(t%c!=0),1)?(P.push(t)):0
for(x=-N;x<N;x++)for(y=-N;y<N;y++)
P.includes(M=x*x+y*y)?(line(X,Y,A=x*W/N+w,B=y*W/N+w),[X,Y]=t%2?[A,B]:[B,A]):0
t=++t%900}