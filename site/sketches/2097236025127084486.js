//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
noFill()
colorMode(HSB)
F=(x,n)=>n<1?0:sin(x*n)+F(x,n-1)/n
for(y=W;y>0;stroke(w+40*cos(x-y),w,w),endShape(),y-=1)
for(x=0,beginShape(),D=(t/50)%3;x<W;x++)
vertex(x,y-7*sin(t/w)*F((x+y)/W*TAU,D+(y/4)%13))
++t}