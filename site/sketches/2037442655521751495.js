//#つぶやきProcessing #p5js
t=0
draw=_=>{H=cos
t||createCanvas(W=(w=200)*2,W)
A=H(T=t/w+1),C=A*A,B=-C,D=-H(A)
S=x=>w*x*H(T)+w
for(x=-1;x<1;x+=.1)
for(y=-1;y<1;y+=.1)
[X,Y]=[A*x+B*y,C*x+D*y],stroke(S(x-Y),S(y-X),S(X-Y)),
strokeWeight(X*Y),line(S(X/x),S(Y/y),S(x+X),S(y+Y))
++t}