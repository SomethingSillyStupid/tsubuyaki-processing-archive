//Back to Simplism #つぶやきProcessing #p5js
t=0,d=40
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)+noStroke()+background('skyblue')
for(x=0;x<W;x+=d)
for(y=0;y<W;y+=d)
fill(r()<.6?'green':'lime'),
abs(x-w)<y/2?arc(x+r(-d,d),y+r(-d,d),r(50),r(30),r(PI),r(PI,TAU)):0
}