//#つぶやきProcessing #p5js
t=0,W=(w=200)*2,N=2
draw=_=>{
r=random
t++%W||createCanvas(W,W)+background('blue')+(N*=2,x=y=w)
blendMode(DIFFERENCE)
fill(r(['orange','white']))
D=int(W/N)
rect(x+=r([-D,0,D]),y+=r([-D,0,D]),W/N)
x<0||x>W?x=w:0
y<0||y>W?y=w:0
N>32?N=4:0
}