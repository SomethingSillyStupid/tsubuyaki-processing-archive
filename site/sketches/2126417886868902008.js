//#つぶやきProcessing #p5js
t=0,N=20
draw=_=>{
createCanvas(W=(w=200)*2,W)
d=W/N
for(i=0;i<N;i++)for(j=0;j<N;j++)
fill((J=i%3+j%7+t/11)%11>9?'blue':'orange'),
rect(x=i*d,y=j*d,d),
fill(J%11<7?'purple':'yellow'),
triangle(x=(i+1)*d,y=j*d,x-d,y+d,x+d,y+d)
++t}