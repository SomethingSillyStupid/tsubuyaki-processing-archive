//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
for(x=0;x<W;x+=4)
stroke(w*sin(t*x),w*cos(x+t),w),
strokeWeight(r(9)),
line(x,w*sin(acos((w-x)/w)+r(-.1,.1))+w,w*cos(T=-acos((W*sin(t/w)-x)/w)+r(-.1,.1))+w,w*sin(T)+w)
++t}