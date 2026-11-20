//#つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
colorMode(HSB)
strokeWeight(3)
for(N=0,T=(t++%90)/9;N<30;N++)
for(x=-T;x<T;x+=.01){
for(i=1,s=x*PI,X=x*x,c=1;i<N;i++)
s*=(1-X/i/i),
c*=(1-X/(i-.5)**2)
stroke(abs(N*9*sin(T/9-c*s*x)),w,w)
point(s*70+w,c*70+w)
}}