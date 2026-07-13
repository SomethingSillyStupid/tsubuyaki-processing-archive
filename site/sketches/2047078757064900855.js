//#つぶやきProcessing #p5js
t=0
draw=_=>{
frameRate(2)
createCanvas(W=(w=200)*2,W)
fill('orange')
rect(30,30,330)
for(T=i=0;T<TAU;T+=.62,i++)
fill(V=t%2?V:shuffle([70, 140, 220])),
blendMode([DODGE,BURN,EXCLUSION][int(i+t)%3]),
circle(99*cos(T)+w,99*sin(T)+w,w)
t++}