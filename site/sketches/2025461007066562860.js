//#つぶやきProcessing #p5js
t=0
draw=_=>{r=random
colorMode(HSB)
t||createCanvas(W=(w=200)*2,W)
t++%w||(T=7/r([3,5,7,9]),R=w,p=T/2)
C=x=>R*cos(x+t/w)+w
D=x=>rect(C(G=x),C(G-1.6),3)
stroke(((R+=r(-3,p))*(p+=r(-.1,.1)))%W,W,W)
for(U=0;U<7;U+=T)
D(U-p),D(U+p)
}