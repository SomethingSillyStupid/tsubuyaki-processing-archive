//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
F=(x,y,r,R,T,C=cos(T),S=sin(T))=>circle(X=r*R*C+x,Y=r*R*S+y,dist(X,Y,r*C+x,r*S+y)*2)
for(x=0;x<W;x+=40)for(y=0;y<W;y+=40)noFill(),circle(x,y,40),fill(0,W,W,99),F(x,y,20,.4,atan2(mouseY-y,mouseX-x))
++t}