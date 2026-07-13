//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)
background(0,3)
m=i=>M[i%4]
for(n=0;n<1e3;n++)
M=[X=(T=((n+t)%W)/3)*cos(T)+w,Y=T*sin(T)+w,80*cos(V=(n-t)/87)+X,80*sin(V)+Y],
stroke(m(U=int((t+n)/44)),m(U*2),m(U+1)),
line(m(U),m(U+1),m(U+2),m(U+3))}