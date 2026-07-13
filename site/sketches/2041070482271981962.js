//#つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t||createCanvas(W=(w=200)*2,W)
;(T=t++%w)||noStroke(N=random(3),I=int(N))
p=x=>((X=cos(x+N))<0?-1:1)*abs(X)**N
fill(...[w+r(-55,55),r(160),r(99,w)].map((_,i,B)=>B[(i+I)%3]),r(99))
circle(T*p(t)+w,T*p(t-1.6)+w,T/3)
}