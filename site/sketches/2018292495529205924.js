//#つぶやきProcessing #p5js
t=0
draw=_=>{L=line
createCanvas(W=(w=200)*2,W)
blendMode(DODGE)
for(x=0;x<=W*2;x+=40)
stroke(A=w*cos(t/51),B=w*sin(t/57),A),
strokeWeight(14),
x<W?L(x,0,0,x):L(M=min(W,x),X=x-W,x-W,W),
stroke(B*cos(x),A*sin(x),B),
x<W?L(x,W,0,W-x):L(M,X,W-X,0)
++t}