//#つぶやきProcessing #p5js
t=0
draw=_=>{t++||createCanvas(W=(w=200)*2,W)+(x=.1,a=random()+3)
e=x=>a*x*(1-x)
f=x=>W-e(x)*W
g=x=>W-x*x*W
h=x=>e(x)**.5
for(u=0;u<1;u+=.01)
point(u*W,g(u)),point(u*W,f(u))
stroke(W*x,t,W*h(x))
line(X=x*W,g(x),X,Y=f(x))
line(X,Y,(x=h(x))*W,Y)
t=++t%w}