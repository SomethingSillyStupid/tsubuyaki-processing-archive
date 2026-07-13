//#つぶやきProcessing #p5js
t=0
draw=_=>{a=abs
createCanvas(W=(w=200)*2,W)
t++%20||(F=random(9,w))
S=x=>sin(x/8)
for(R=1;R<W;R+=7)
for(T=0;T<TAU;T+=.01)
stroke(A=a(F*S(P=R-t/w*F)),B=a(R*S(P)),F+B-A),
strokeWeight(A-B),
point((Q=R+9*S(U=P/T*9+t*4))*S(V=T+P)+w,Q*S(V-12)+w)
}