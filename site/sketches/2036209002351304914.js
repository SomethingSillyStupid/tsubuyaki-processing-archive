//#つぶやきProcessing #p5js
t=0,N=24
draw=_=>{frameRate(5)
createCanvas(W=(w=200)*2,W)
strokeWeight(8)
D=W/N
for(i=0;i<N;i++)
for(j=0;j<N;j++)
I=int(random(mag(i-N/2,j-N/2)%8)*sin(t/8))/8*TAU,
stroke(w*sin(t+i),w*cos(t+j),I*W),
line(X=i*D+D/2,Y=j*D+D/2,D*cos(I)+X,D*sin(I)+Y)
++t}