//#つぶやきProcessing #p5js
t=0
draw=_=>{a=abs
createCanvas(W=(w=200)*2,W)
S=(x,n=3)=>n<2?0:sin(x/(N=n-1))/N-S(x,n-1)
for(R=1;R<W;R+=12)
for(T=0;T<TAU;T+=.01)
stroke(A=a(R*S(P=R+t/9)),B=a(R*S(P+1.6)),A+B),
strokeWeight(A/24),
point((Q=R+6*S(U=P/T*t))*S(V=T+P)+w,Q*S(V+1.6)+w)
++t}