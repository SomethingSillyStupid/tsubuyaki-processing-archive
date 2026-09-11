//#つぶやきProcessing #p5js
t=0
draw=_=>{frameRate(1)
r=random
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
background(w,w,w)
F=(x,n)=>n<1?0:sin((x-w)/n+a)+F(x,n-1)
for(y=0;y<W;y+=20,fill(r(99)+150,w,w),endShape())
for(x=0,a=r(-9,9),beginShape();x<W;x+=1)
vertex(x,-F(x,42)+y)
++t}