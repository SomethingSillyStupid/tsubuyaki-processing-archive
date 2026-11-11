//11月11日 #つぶやきProcessing #p5js
t=0,W=(w=200)*2
draw=_=>{
r=random
s=strokeWeight
p=point
k=stroke
t||createCanvas(W,W)+(P=[r(9,Q=99),r(Q,w),r(w,T=300),r(T,W)])
P.map(x=>(s(20),k(w,159,Q),p(x+3*sin((Y=W-min(T,t))/5),Y),s(3),k(0),p(x-3,Y),p(x+3,Y)))
t=++t%W}