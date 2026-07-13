//Cum On Feel the Noize #つぶやきProcessing #p5js
t=0
draw=_=>{n=noise
createCanvas(W=(w=200)*2,W)+noStroke(U=TAU,D=n(t)*9)
translate(w,w)
rotate(t*D)
for(T=0;T<U;T+=1e-4)
fill(w*n(D+T),p=(R=w*n(t*T))*cos(I=n(T)*T*3),q=R*sin(I)),
rect(p,q,abs(p-q)/7)
++t}