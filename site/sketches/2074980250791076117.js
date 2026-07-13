//#つぶやきProcessing #p5js
t=0,d=6
draw=_=>{
createCanvas(W=(w=200)*2,W,WEBGL)
rotateX(t/75)
for(x=-w;x<w;x+=d)
for(y=-w;y<w;y+=d)
T=atan2(y,x),M=mag(x,y),
push(),
M<w?translate(M*cos(U=M+T)+d/2,M*sin(U)+d/2,w-M*M/w):translate(x+d/2,y+d/2,0),
box((w-M)/11),
pop()
++t}