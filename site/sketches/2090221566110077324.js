//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)+(D=r([29,37]),d=r([3,7]))
f=(x,y,n)=>n<1?0:(mag(x-w,y-w)<w?point(x,y):0,f(x+d,y,n-1),f(x,y+d,n-1))
for(x=0;x<W;x+=D)
for(y=0;y<W;y+=D)
strokeWeight(r([1,3])),
f(x+r([D,d]),y,10)
t=++t%9}