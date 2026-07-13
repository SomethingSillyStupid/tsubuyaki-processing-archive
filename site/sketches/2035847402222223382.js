//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
strokeWeight(4)
S=(x,n)=>n<1?x:sin(x/n)*(9-S(x,n-2))
for(R=1;R<w;R+=4)
for(T=0;T<TAU;T+=.01)
stroke(R*S(R*t/w+1.6,5),w*S(R+t/88,5),w*tan(R+T*t/w)),
point((Q=R/4/S(T,3))*S(U=R/5+T+t/9,8)+w,Q*S(U+1.6,8)+w)
++t}