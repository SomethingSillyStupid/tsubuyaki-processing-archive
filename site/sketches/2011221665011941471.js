//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
createCanvas(W=(w=200)*2,W)
for(x=0;x<W;x+=4)
for(i=0;i<8;i++)
stroke(w*sin(t*x*i),w*cos(x+t),w),
strokeWeight(r(9)),
line(x,min((i+1)*50,w*sin(acos((w-x)/w))+w),w*cos(T=-acos((x+(i%2?-1:1)*39-w)/w))+w,max(i*50,w*sin(T)+w))
++t}