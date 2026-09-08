//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
noFill()
colorMode(HSB)
F=(x,n)=>n<1?0:sin(x*n)-F(x,n-1)/n
for(y=W;y>0;stroke(w+40*cos(x-y),w,w),endShape(),y--)
for(x=0,beginShape(),D=(t/W)%W;x<W;x+=20)
vertex(x,y-7*F((x+y)/64,D+(x*y/15)%13))
++t}