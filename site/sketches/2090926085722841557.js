//WIP #つぶやきProcessing #p5js
t=0,d=20
draw=_=>{
createCanvas(W=(w=200)*2,W)
F=(x,y,r,R,T,C=cos(T),S=sin(T))=>circle(X=r*R*C+x,Y=r*R*S+y,dist(X,Y,r*C+x,r*S+y)*2)
for(x=i=0;x<W;x+=d,i++)for(y=0;y<W;y+=d)noFill(),circle(x,y,d),fill(mag(x-w,y-w)),F(x,y,d/2,.4,t/7*(i%2?-1:1))
++t}