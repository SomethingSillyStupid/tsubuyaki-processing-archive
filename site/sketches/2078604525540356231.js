//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
t||(P=new Array(D=50).fill(new Array(D).fill(random(W))))
colorMode(HSB,W)
strokeWeight(8)
for(i=0;i<D;i++)
for(j=0;j<D;j++)
stroke(abs(P[i][j]=(P[i][j]+t*cos(t/mag(i-25,j-25))))%W,W,W),
point(i*8,j*8)
t=++t%W}