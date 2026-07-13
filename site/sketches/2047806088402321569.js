//WIP #つぶやきProcessing #p5js
t=0,N=10
draw=_=>{
createCanvas(W=(w=200)*2,W)
background('orange')
D=W/N
fill('blue')
blendMode([OVERLAY,DIFFERENCE][int(t*62)%2])
rect(t%N*D,int(t/N)*D,abs(t/N*N-t)<.1?D*abs(cos(t%D*TAU/4)):D,D)
t=(t+=.1)%100}