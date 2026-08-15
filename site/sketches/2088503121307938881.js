//#つぶやきProcessing #p5js
t=0,N=20
draw=_=>{
createCanvas(W=(w=200)*2,W)
F=C=>{g=createGraphics(W,W);
return g.textSize(W).text(C,0,350)}
G=F('戦')
H=F('和')
for(i=0;i<20;i++)
for(j=0;j<20;j++)
copy(t>w?H:random(t/w)<.2?G:H,i*N,j*N,N,N,i*N,j*N,N,N)
t=++t%W}