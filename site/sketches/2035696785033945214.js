//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
S=(x,n)=>n<1?0:sin(x/n)+S(x,n-2)
for(R=1;R<w;R+=8)
for(T=0;T<TAU;T+=.01)
stroke(R*S(R*t/w+1.6,5),w*S(R+t/88,5),w*tan(R+T*t/w)),
point((Q=R/3*S(T,5))*S(U=R/5+T+t/9,7)+w,Q*S(U+1.6,9)+w)
++t}