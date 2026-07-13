//#genuary #つぶやきProcessing #p5js
t=0
draw=_=>{r=random
createCanvas(W=400,W)
t||(A=[a=r(P=TAU),b=r(a),c=r(b),d=r(c),P-a-b-c-d])
for(X=0;X<W;X+=40)
for(Y=0;Y<W;Y+=40)
for(T=0;T<P;T+=P/4,line(x,y,X,Y))for(i=1,x=X,y=Y;i<5;i++)
line(x,y,x+=15*cos(U=A[i]+T),y+=15*sin(U))
t=++t%99}