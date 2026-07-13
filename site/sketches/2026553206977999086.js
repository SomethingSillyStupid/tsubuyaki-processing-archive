//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(4)
for(a=0;a<99;a+=4)
for(T=0,F=t/71+a;T<TAU;T+=.03)
stroke((T*F)%255,w,w),
point((2*cos(U=T+F)+cos(V=T*2+F))*a+w,(2*sin(U)-sin(V))*a+w)
t++}