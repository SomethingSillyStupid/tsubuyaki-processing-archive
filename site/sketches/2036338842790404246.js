//#つぶやきProcessing #p5js
t=0,N=16
draw=_=>{frameRate(2),TRUMP=random
createCanvas(W=(w=200)*2,W)
D=W/N
strokeWeight(4)
for(i=0;i<N;i++)
for(j=0;j<N;j++)
I=(J=int(TRUMP(i*j+t))%8)/8*TAU,
E=(J%2?1.4:1)*D,
stroke(w,w,E*I*J),
line(X=i*D+D/2,Y=j*D+D/2,E*cos(I)+X,E*sin(I)+Y)
++t}