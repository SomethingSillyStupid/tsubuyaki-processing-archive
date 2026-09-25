// #つぶやきProcessing #p5js
t=0,D=9
draw=_=>{
r=_=>randomGaussian(0,D)
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+noStroke(X=Y=C=w)
F=(x,M)=>abs(x%M)
fill(C=F(C+r()*61,360),w,w,r()/30)
X=F(X+r(),W),Y=F(Y+r(),W)
circle(X,Y,R=r()*4)
}