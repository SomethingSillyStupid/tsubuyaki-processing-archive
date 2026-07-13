//#つぶやきProcessing #p5js
t=0,d=4
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(d)
for(x=-w;x<w;x+=d)
for(y=-w;y<w;y+=d)
stroke((R=abs(x*x-y*y+x*y*sin(t/w)))>w*9?'green':'lime'),
point(x*cos(U=(R+t)/t/t)-y*sin(U)+w,x*sin(U)+y*cos(U)+w)
++t}