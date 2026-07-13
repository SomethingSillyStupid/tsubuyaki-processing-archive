//夢で思いついた #つぶやきProcessing #p5js
t=0
draw=_=>{
r=random
t++||createCanvas(W=(w=200)*2,W)+colorMode(HSB)+(n=0,P=[])
f=n=>int(n/20)*20
d=n=>n<1?0:(point((R=20*n/w)*cos(T=n/99*TAU)+x,R*sin(T)+y),d(n-1))
!P.includes(D=f((x=r(W))+(y=r(W))))?(d(w),P.push(D)):n++
n>199?t=0:0
}