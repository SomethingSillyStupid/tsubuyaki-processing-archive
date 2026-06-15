t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
B=(a,b,c,x)=>a*(X=1-x)*X+b*X*x+c*x*x
C=T=>R*cos(T+t/7)+99
for(R=0;R<w;R+=9)for(T=0;T<TAU;T+=.1)for(u=-1;u<1;u+=.1)
stroke(R,A=C(U=T+t/9),255-A),point(B(A,C(U+6),E=C(U+3),u),B(C(V=T-1.6),C(V+6),C(V+3),u))
++t}
