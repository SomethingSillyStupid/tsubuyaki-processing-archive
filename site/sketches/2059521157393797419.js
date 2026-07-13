//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
S=(x,n)=>n<1?0:sin(x*(N=n*2-1))/N+S(x,n-1)
strokeWeight(6)
for(Q=0;Q<w;Q+=20)
for(T=0;T<TAU*8;T+=.01)
stroke(R=S(T*4,17)*5+Q,w,w),
point(R*cos(U=T+Q*t/w)+w,R*sin(U)+w)
++t}