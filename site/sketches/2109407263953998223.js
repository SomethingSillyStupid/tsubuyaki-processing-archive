//#つぶやきProcessing #p5js
t=0,N=1e3,w=200
draw=_=>{
r=random;c=color
t++%w||createCanvas(W=w*2,W)+colorMode(HSB)+background('skyblue')
for(i=0,x=r(W),y=r(W);i<N;i++)
stroke(lerpColor(c('#ffff0'),c('#fa8072'),i/N)),
point(x+=r(-3,3),y+=r(-3,3))
}