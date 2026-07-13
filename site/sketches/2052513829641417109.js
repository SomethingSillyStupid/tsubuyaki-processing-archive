//#つぶやきProcessing #p5js
t=s=0,N=20
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
s++%w||(S=W/N,B=random(255))
for(i=0;i<N;i++)for(j=0;j<N;j++)rect(x=i*S+t,y=j*S,S/2-(sin(B+i*j/3)*t)%S,S),fill(sin(x+y+t)*90+B,w,w)
t=(t+=.1)%(S*2)
}