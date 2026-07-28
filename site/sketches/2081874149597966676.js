//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W,WEBGL)
colorMode(HSB)
M=x=>(x<0?-1:1)*abs(x)%1
for(R=0;R<w;R+=6)
for(T=-PI;T<PI;T+=.1)
point(R*((E=2*sin((R+t)/97))*M(Math.sinh(T))+(1-E)*sin(T)),-R*(E*M(Math.cosh(T))+(1-E)*cos(T))),
stroke(R*T*E,w,w)
++t}