//WIP #つぶやきProcessing #p5js
t=0
draw=_=>{
createCanvas(W=(w=200)*2,W)
F=(x,y,r,R,T)=>circle(X=r*R*cos(T)+x,Y=r*R*sin(T)+y,dist(X,Y,r*cos(T)+x,r*sin(T)+y)*2)
for(x=0;x<W;x+=20)for(y=0;y<W;y+=20)noFill(),circle(x,y,20),fill(0,W,W,99),F(x,y,10,abs(sin(t/71)/2),(x+y+t)/7)
++t}