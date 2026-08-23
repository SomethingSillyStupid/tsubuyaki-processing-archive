//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)
for(c=-W;c<W;c+=40)
a=w+(b=cos(t/w)),A=(b*b+1)*2,B=2*b*c,C=c*c-a*a,X0=-B/A,X1=sqrt(abs(B*B-2*A*C))/A,stroke(T=[w+(X0-X1)*b+c,w+X0-X1,w+(X0+X1)*b+c,w+X0+X1]),line(...T)
}