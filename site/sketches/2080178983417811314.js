//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
P=(x,n)=>Math.sign(x)*abs(x)**n
L=(a,b,x)=>a*x+b*(1-x)
for(x=-w;x<w;x++)
for(y=-w;y<w;y++)
abs(abs(L(abs(x)+abs(y),x*x+y*y,t/W)-99)-3)<2?point(x+w,y+w):0
t=++t%500}