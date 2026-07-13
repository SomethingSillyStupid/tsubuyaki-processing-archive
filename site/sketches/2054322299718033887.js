//#つぶやきProcessing #p5js
t=0,h=.5
draw=_=>{
createCanvas(W=(w=200)*2,W)
for(x=-5;x<5;x+=h)
for(y=-5;y<5;y+=h)
{for(u=-5,s=0;u<5;u+=h)
for(v=-5;v<5;v+=h)
s+=cos(t/w*(u*x-v*y))*(x*x-u*v*sin(t/77)+y*y)*h
fill(S=abs(s)*9,(w+s)%w,(s*w)%w)
rect(x*w/5+w,y*w/5+w,min(19,S/9))}
t++}