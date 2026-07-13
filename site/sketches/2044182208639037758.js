//#つぶやきProcessing #p5js
t=0
draw=_=>{
t++||createCanvas(W=(w=200)*2,W)+noFill(p=q=w)+strokeWeight(8)
background(77,1)
stroke(T=(t+p+q)%255,p-q/7,q-p/3,99)
X=T*cos((U=t*1.3))*sin(t/19)+w
Y=T*sin(U)*cos(t/91)+w
bezier(p,q,P=(p+X)/3,Q=(q+Y)/3,P*2,Q*2,p=X,q=Y)
}