//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
L=(a,b,t)=>a*t+b*(1-t)
for(u=-1;u<1;u+=.01)
for(v=-1;v<1;v+=.01)
abs(L(A=u*u-v*v*v,B=u*u-v,t/7))<.3?(stroke(A,B,W-abs(A+B)*W),point(u*190+w,w-v*190)):0
t=++t%w}