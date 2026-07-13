//#つぶやきProcessing #p5js
t=0
draw=_=>{
t||createCanvas(W=(w=200)*2,W)
colorMode(HSB)
P=t=>t*w+w
for(x=-1;x<1;x+=.1)
for(y=-1;y<1;y+=.1)
for(i=0,[u,v]=[x,y];i<9;i++)
[U,V]=[v*.3+u,-u*u+sin(t/17)+v],
line(P(u),P(v),P(u=U),P(v=V)),
stroke(150+30*i+(u+v),w,w)
t+=.1}