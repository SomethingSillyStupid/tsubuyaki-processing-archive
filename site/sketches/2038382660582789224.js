//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)+colorMode(HSB)
S=(x,t)=>x*sin(t)*w+w
A=sin(T=t/w),C=1/A,B=-C,D=-A
for(x=-1;x<1;x+=.1)for(y=-1;y<1;y+=.1)[X,Y]=[x*sin(A*T)+y*B,x*C+y*cos(D*T)],fill(V=S(Y,T),U=S(X,T),G=abs(S(X,Y))),rect(V,U,min(30,G/9))
++t}