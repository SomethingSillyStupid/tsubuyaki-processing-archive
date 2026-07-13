//#つぶやきProcessing #p5js
t=0,h=8
draw=_=>{
createCanvas(W=(w=200)*2,W)+strokeWeight(h)+colorMode(HSB)
for(x=-w;x<w;x+=h)
for(y=-w;y<w;y+=h)
[X,Y]=[(U=sin(x*(T=sin(t/W))))*h+y-x,y+x-(V=sin(y*T))*h],
stroke((abs(X*V-Y*U))%255,w,w),
point(X+w,Y+w)
++t}