//#つぶやきProcessing #p5js
t=0
draw=_=>{
p=point,L=1.6,N=TAU
createCanvas(W=(w=200)*2,W,WEBGL)
c=(R,x)=>R*cos(x)
P=N/9
for(T=0;T<N;T+=N/3)
p(A=c(w,T),B=c(w,T-L)),p(C=c(M=w-t,U=T+P),D=c(M,U-L)),p(E=c(M,U+=P),F=c(M,U-L)),p(G=c(w,U+=P),H=c(w,U-L)),
bezier(A,B,C,D,E,F,G,H)
t=++t%w}